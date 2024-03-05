import { ServicesSelectedContext } from "@contexts/servicesSelected";
import { UserContext } from "@contexts/userContext";
import { useNavigation } from "@react-navigation/native";
import { CategoryResponse, ServiceResponse } from "@services/user/types";
import { getListCategory } from "@services/user/user";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { Alert } from "react-native";

const HomeViewModel = () => {
  const navigation = useNavigation<any>();
  const [ativo, setAtivo] = useState("");
  const {
    user: { user },
  } = useContext(UserContext);
  const { setServicesSelected } = useContext(ServicesSelectedContext);
  const [services, setServices] = useState<ServiceResponse[]>([]); // [1

  const {
    data: categories,
    isLoading: isLoadingGetListCategory,
    refetch: refetchCategorias,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getListCategory,
    onError: () => {
      Alert.alert(
        "Copiloto",
        "Desculpe, estamos com problemas. Tente novamente!",
        [{ text: "Tentar novamente", onPress: () => refetchCategorias() }]
      );
    },
  });

  const handleSearch = () => {
    navigation.navigate("SearchHome", { services: services, categories });
  };

  const activeItem = (item: CategoryResponse) => {
    setAtivo(item.nome);
    setServices(item?.services ? item.services : []);
  };

  const handleFullServicesSelected = (item: ServiceResponse) => {
    setServicesSelected([]);
    navigation.navigate("FullServices", {
      selectItem: item,
      servicesList: services,
      categoryActive: ativo,
      categoriesList: categories,
    });
  };

  const handleFullServices = () => {
    setServicesSelected([]);
    navigation.navigate("FullServices", {
      servicesList: services,
      categoryActive: ativo,
      categoriesList: categories,
    });
  };

  const isEmpty = !user || !categories || categories.length === 0;

  useEffect(() => {
    if (categories && categories.length > 0) {
      setAtivo(categories[0].nome);
      setServices(categories[0].services);
    }
  }, [categories]);

  return {
    ativo,
    user,
    isEmpty,
    services,
    categories,
    navigation,
    activeItem,
    handleSearch,
    handleFullServices,
    isLoadingGetListCategory,
    handleFullServicesSelected,
  };
};

export default HomeViewModel;
