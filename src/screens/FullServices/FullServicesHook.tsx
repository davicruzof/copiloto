import { useNavigation, useRoute } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import {
  CategoryResponse,
  ServiceRecommendResponseList,
  ServiceResponse,
} from "@services/user/types";
import { getServicesRecommended } from "@services/user/user";
import hookPermissionLocation from "@hooks/permissionLocation";
import { ServicesMapContext } from "@contexts/servicesMap";
import { Companys, ServicesCompany } from "@services/company/types";
import { getCompanyServices } from "@services/company/company";

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
  const { setServicesMap } = useContext(ServicesMapContext);
  const [position, setPosition] = useState<{
    latitude: string;
    longitude: string;
  } | null>(null);

  const { getPosition, requestPermission } = hookPermissionLocation();

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

  const {
    mutate: mutateGetServicesCompany,
    isLoading: mutateGetCompanyLoading,
  } = useMutation({
    mutationFn: (servicesIds: Companys) => getCompanyServices(servicesIds),
    onSuccess: (data: ServicesCompany[]) => {
      if (data.length > 0) {
        setServicesMap(data);
        navigation.navigate("MapView", {coordinates: position});
      } else {
        Alert.alert(
          "Copiloto",
          "Nenhum dado foi encontrado na api para listar oficinas"
        );
      }
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
