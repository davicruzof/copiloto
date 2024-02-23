import { Alert } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { CategoryResponse, ServiceResponse } from "@services/user/types";
import { getServicesRecommended } from "@services/user/user";
import hookPermissionLocation from "@hooks/permissionLocation";
import { ServicesSelectedContext } from "@contexts/servicesSelected";

const FullServicesHook = () => {
  const route = useRoute();
  const navigation = useNavigation<any>();

  const { servicesSelected, setServicesSelected } = useContext(
    ServicesSelectedContext
  );

  const { categoryActive, servicesList, categoriesList, selectItem } =
    route.params as {
      categoryActive: string;
      selectItem?: ServiceResponse;
      servicesList: ServiceResponse[];
      categoriesList: CategoryResponse[];
    };

  const [services, setServices] = useState<ServiceResponse[]>(servicesList);
  const [ativo, setAtivo] = useState(categoryActive);

  const [cep, setCep] = useState("");
  const [stateModal, setStateModal] = useState(false);

  const { requestPermission } = hookPermissionLocation();

  const updateState = () => {
    setStateModal(!stateModal);
  };

  const { mutate: mutateGetServicesRecommended, isLoading } = useMutation({
    mutationFn: (servicesIds: string[]) => getServicesRecommended(servicesIds),
    onSuccess: async (data) => {
      if (data.length > 0) {
        navigation.navigate("RecommendationService", {
          recommendsServices: data,
        });
      } else {
        const permission = await requestPermission();
        if (permission === "granted") {
          navigation.navigate("MapView");
        } else {
          setStateModal(true);
        }
      }
    },
    onError: () => {
      Alert.alert(
        "Copiloto",
        "Desculpe, estamos com problemas. Tente novamente mais tarde."
      );
    },
  });

  const handleChangeCategory = (item: CategoryResponse) => {
    Alert.alert(
      "Copiloto",
      `Todas as seleções serão desfeita, Deseja realmente mudar para a categoria ${item.nome}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => {
            setAtivo(item.nome);
            setServices(item?.services ? item.services : []);
            setServicesSelected([]);
          },
        },
      ]
    );
  };

  const handleSelectService = (service: ServiceResponse) => {
    if (servicesSelected.includes(service.idservice)) {
      const auxServices: string[] = [];
      servicesSelected.map((item) => {
        item !== service.idservice && auxServices.push(item);
      });
      setServicesSelected(auxServices);
    } else {
      setServicesSelected((old) => [...old, service.idservice]);
    }
  };

  const handleNextScreen = async () => {
    mutateGetServicesRecommended(servicesSelected);
  };

  const handleNextScreenModal = () => {
    setStateModal(false);
    navigation.navigate("MapView", {cep});
  };

  useEffect(() => {
    if (selectItem) {
      handleSelectService(selectItem);
    }
  }, []);

  return {
    cep,
    ativo,
    setCep,
    services,
    isLoading,
    navigation,
    stateModal,
    updateState,
    categoriesList,
    servicesSelected,
    handleNextScreen,
    handleSelectService,
    handleChangeCategory,
    handleNextScreenModal,
  };
};

export default FullServicesHook;
