import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { ServiceRecommendResponse } from "@services/user/types";
import hookPermissionLocation from "@hooks/permissionLocation";
import { ServicesMapContext } from "@contexts/servicesMap";
import { getCompanyServices } from "@services/company/company";
import { Companys, ServicesCompany } from "@services/company/types";
import { Alert } from "react-native";
import { useMutation } from "@tanstack/react-query";

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

  const { requestPermission, getPosition } = hookPermissionLocation();

  const [modalAttributes, setModalAttributes] = useState<{
    title: string;
    content: string;
  }>({
    title: "",
    content: "",
  });

  const [modalVisible, setModalVisible] = useState(false);

  const { setServicesMap } = useContext(ServicesMapContext);
  const [position, setPosition] = useState<{
    latitude: string;
    longitude: string;
  } | null>(null);

  const {
    mutate: mutateGetServicesCompany,
    isLoading: mutateGetCompanyLoading,
  } = useMutation({
    mutationFn: (servicesIds: Companys) => getCompanyServices(servicesIds),
    onSuccess: (data: ServicesCompany[]) => {
      if (data.length > 0) {
        setServicesMap(data);
        navigation.navigate("MapView", { coordinates: position });
      } else {
        Alert.alert(
          "Copiloto",
          "Nenhum dado foi encontrado na api para listar oficinas"
        );
      }
    },
  });

  const handleSelectService = (service: ServiceRecommendResponse) => {
    if (listSelections.includes(service.recomended_id_service)) {
      const auxServices: string[] = [];
      listSelections.map((item) => {
        item !== service.recomended_id_service && auxServices.push(item);
      });
      setListSelections(auxServices);
    } else {
      setListSelections((old) => [...old, service.recomended_id_service]);
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

    if (permission === "granted") {
      const position = await getPosition();

      setPosition(position.coordenadas);

      mutateGetServicesCompany({
        services: listSelections,
        coordenadas: position.coordenadas,
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

  useEffect(() => {
    let arrayAux: string[] = [];
    recommendServices.map((item) => arrayAux.push(item.recomended_id_service));
    setListSelections(arrayAux);
  }, []);

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
