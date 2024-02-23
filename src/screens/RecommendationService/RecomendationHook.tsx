import { useContext, useEffect, useState } from "react";
import hookPermissionLocation from "@hooks/permissionLocation";
import { ServiceRecommendResponse } from "@services/user/types";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ServicesRecommendationSelectedContext } from "@contexts/servicesRecommendationSelected";

const RecommendationServiceHook = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { recommendsServices } = route.params as {
    recommendsServices: ServiceRecommendResponse[];
  };
  const { requestPermission } = hookPermissionLocation();

  const { servicesRecommendationSelected, setServicesRecommendationSelected } =
    useContext(ServicesRecommendationSelectedContext);

  const [cep, setCep] = useState("");
  const [stateModal, setStateModal] = useState(false);

  const [modalAttributes, setModalAttributes] = useState<{
    title: string;
    content: string;
  }>({
    title: "",
    content: "",
  });

  const [modalVisible, setModalVisible] = useState(false);

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

  const handleNextScreenModal = () => {
    setStateModal(false);
    navigation.navigate("MapView", {cep});
  };

  const handleNextScreen = async () => {
    const permission = await requestPermission();
    if (permission === "granted") {
      navigation.navigate("MapView");
    } else {
      setStateModal(true);
    }
  };

  const handleNextScreenEmpty = async () => {
    const permission = await requestPermission();
    if (permission === "granted") {
      setServicesRecommendationSelected([]);
      navigation.navigate("MapView");
    } else {
      setStateModal(true);
    }
  };

  const handleSelectService = (service: ServiceRecommendResponse) => {
    if (
      servicesRecommendationSelected.includes(service.recomended_id_service)
    ) {
      const auxServices: string[] = [];
      servicesRecommendationSelected.map((item) => {
        item !== service.recomended_id_service && auxServices.push(item);
      });
      setServicesRecommendationSelected(auxServices);
    } else {
      setServicesRecommendationSelected((old) => [
        ...old,
        service.recomended_id_service,
      ]);
    }
  };

  useEffect(() => {
    let arrayAux: string[] = [];
    recommendsServices.map((item) => arrayAux.push(item.recomended_id_service));
    setServicesRecommendationSelected(arrayAux);
  }, []);

  return {
    cep,
    setCep,
    handleInfo,
    navigation,
    stateModal,
    updateState,
    modalVisible,
    modalAttributes,
    setModalVisible,
    handleNextScreen,
    recommendsServices,
    handleSelectService,
    handleNextScreenModal,
    handleNextScreenEmpty,
    servicesRecommendationSelected,
  };
};

export default RecommendationServiceHook;
