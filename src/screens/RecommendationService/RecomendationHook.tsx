import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ServiceRecommendResponse } from "services/user/types";
import hookPermissionLocation from "../../shared/hooks/permissionLocation";

const RecommendationServiceHook = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const [listSelections, setListSelections] = useState<string[]>([]);

  const { recommendServices, services } = route.params as {
    recommendServices: ServiceRecommendResponse[];
    services: string[];
  };

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
      setListSelections([...listSelections, service.nome]);
    }
  };

  const handleInfo = (service: ServiceRecommendResponse) => {
    setModalVisible(!modalVisible);
    setModalAttributes({
      title: service.nome,
      content: service.recommendation_text,
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
      mutateGetServicesCompany({
        services: [...services, ...listSelections],
      });
    }
  };

  const handleNextScreen = async () => {
    getCompanys();
  };

  const handleNextScreenEmpty = async () => {
    getCompanys();
    // navigation.navigate("MapView", { services });
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
  };
};

export default RecommendationServiceHook;
