import { useNavigation, useRoute } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import {
  CategoryResponse,
  ServiceRecommendResponseList,
  ServiceResponse,
} from "@services/user/types";
import { getServicesRecommended } from "@services/user/user";
import hookPermissionLocation from "@hooks/permissionLocation";

const FullServicesHook = () => {
  const route = useRoute();
  const navigation = useNavigation<any>();

  const params = route.params as {
    selectItem?: ServiceResponse;
    services: ServiceResponse[];
    categoryList: CategoryResponse[];
  };

  const [listSelections, setListSelections] = useState<string[]>([]);
  const [ativo, setAtivo] = useState("");
  const [services, setServices] = useState<ServiceResponse[]>([]);
  const [cep, setCep] = useState("");
  const [stateModal, setStateModal] = useState(false);

  const {
    mutateGetCompanyLoading,
    requestPermission,
    mutateGetServicesCompany,
  } = hookPermissionLocation();

  const { mutate: mutateGetServicesRecommended, isLoading } = useMutation({
    mutationFn: (servicesIds: string[]) => getServicesRecommended(servicesIds),
    onSuccess: (data: ServiceRecommendResponseList) => {
      const recommend = data?.data;
      if (recommend && recommend.length > 0) {
        navigation.navigate("RecommendationService", {
          recommendServices: recommend,
          services: listSelections,
        });
      } else {
        getCompanys();
      }
    },
    onError: () => {
      Alert.alert(
        "Copiloto",
        "Desculpe, estamos com problemas. Tente novamente mais tarde."
      );
    },
  });

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
        services: listSelections,
        coordenadas: permission.coordenadas,
      });
    } else {
      updateState();
    }
  };

  const activeItem = (item: CategoryResponse) => {
    if (listSelections.length > 0) {
      Alert.alert(
        "Copiloto",
        "Deseja realmente mudar de categoria? Todos as suas seleções serão desfeitas",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          { text: "Confirmar", onPress: () => handleChangeCategory(item) },
        ]
      );
    } else {
      handleChangeCategory(item);
    }
  };

  const handleChangeCategory = (item: CategoryResponse) => {
    setAtivo(item.nome);
    setListSelections([]);
    setServices(item?.services ? item.services : []);
  };

  const handleRecommendation = () => {
    mutateGetServicesRecommended(listSelections);
  };

  useEffect(() => {
    if (params?.selectItem) {
      let categoriaSelecionado: CategoryResponse | any;
      params.categoryList.filter((item) => {
        if (item.idCategoria === params.selectItem!.id_categoria) {
          categoriaSelecionado = item;
        }
      });
      handleChangeCategory(categoriaSelecionado);
      handleSelectService(params.selectItem);
    } else {
      handleChangeCategory(params.categoryList[0]);
    }
  }, []);

  const handleSelectService = (service: ServiceResponse) => {
    if (listSelections.includes(service.idservice)) {
      const auxServices: any = [];
      listSelections.map((item: any) => {
        item !== service.idservice && auxServices.push(item);
      });
      setListSelections(auxServices);
    } else {
      setListSelections([...listSelections, service.idservice]);
    }
  };

  return {
    isLoading,
    navigation,
    categoryList: params.categoryList,
    activeItem,
    handleSelectService,
    handleRecommendation,
    ativo,
    services,
    listSelections,
    mutateGetCompanyLoading,
    cep,
    setCep,
    updateState,
    stateModal,
    nextScreen,
  };
};

export default FullServicesHook;
