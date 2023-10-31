import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ServiceRecommendResponse } from "@services/user/types";
import hookPermissionLocation from "@hooks/permissionLocation";

const RecommendationServiceHook = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const [listSelections, setListSelections] = useState<string[]>([]);
  const [cep, setCep] = useState("");
  const { recommendServices, services } = route.params as {
    recommendServices: ServiceRecommendResponse[];
    services: string[];
  };
  const [stateModal, setStateModal] = useState(false);

  const {
    requestPermission,
    mutateGetCompanyLoading,
    mutateGetServicesCompany,
  } = hookPermissionLocation();

  useEffect(() => {
    let arrayAux: string[] = [];
    recommendServices.map((item) => arrayAux.push(item.recomended_id_service));
    setListSelections(arrayAux);
  }, []);

  const [modalAttributes, setModalAttributes] = useState<{
    title: string;
    content: string;
  }>({
    title: "",
    content: "",
  });

  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectService = (service: ServiceRecommendResponse) => {
    if (listSelections.includes(service.recomended_id_service)) {
      const auxServices: string[] = [];
      listSelections.map((item) => {
        item !== service.recomended_id_service && auxServices.push(item);
      });
      setListSelections(auxServices);
    } else {
      setListSelections(old => [...old, service.recomended_id_service]);
    }
  };

  const handleInfo = (service: ServiceRecommendResponse) => {
    setModalVisible(!modalVisible);
    setModalAttributes({
      title: service.nome,
      content: service.recommendation_text,
    });
  };

  const updateState = () => {
    setStateModal(!stateModal);
  };

  const nextScreen = () => {
    updateState();
    mutateGetServicesCompany({
      services: listSelections,
      cep,
    });
  };

  const getCompanys = async () => {
    const permission = await requestPermission();

    if (permission?.coordenadas) {
      mutateGetServicesCompany({
        services: [...services, ...listSelections],
        coordenadas: permission.coordenadas,
      });
    } else {
      updateState();
    }
  };

  const handleNextScreen = async () => {
    getCompanys();
  };

  const handleNextScreenEmpty = async () => {
    getCompanys();
  };

  return {
    listSelections,
    navigation,
    recommendServices,
    modalVisible,
    modalAttributes,
    handleInfo,
    setModalVisible,
    handleNextScreen,
    handleSelectService,
    handleNextScreenEmpty,
    mutateGetCompanyLoading,
    stateModal,
    updateState,
    nextScreen,
    cep,
    setCep,
  };
};

export default RecommendationServiceHook;
