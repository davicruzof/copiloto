import { UserContext } from "@contexts/userContext";
import { useNavigation } from "@react-navigation/native";
import { CategoryResponse, ServiceResponse } from "@services/user/types";
import { getListCategory } from "@services/user/user";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Alert } from "react-native";

const HomeViewModel = () => {
  const navigation = useNavigation<any>();
  const [ativo, setAtivo] = useState("");
  const {
    user: { user },
  } = useContext(UserContext);
  const [categoryList, setCategoryList] = useState<CategoryResponse[]>([]);
  const [services, setServices] = useState<ServiceResponse[]>([]);
  const [servicesList, setServicesList] = useState<ServiceResponse[]>([]);

  const { isLoading: isLoadingGetListCategory, refetch: refetchCategorias } =
    useQuery({
      queryKey: ["todos"],
      queryFn: getListCategory,
      onSuccess: ({ data }) => {
        if (data) {
          setCategoryList(data);
          activeItem(data[0]);

          const serviceAux: React.SetStateAction<ServiceResponse[]> = [];

          data.map(
            (item) => item?.services && serviceAux.push(...item.services)
          );
          setServicesList(serviceAux);
        }
      },
      onError: () => {
        Alert.alert(
          "Copiloto",
          "Desculpe, estamos com problemas. Tente novamente!",
          [{ text: "Tentar novamente", onPress: () => refetchCategorias() }]
        );
      },
    });

  const handleSearch = () => {
    navigation.navigate("SearchHome", { services: servicesList, categoryList });
  };

  const activeItem = (item: CategoryResponse) => {
    setAtivo(item.nome);
    setServices(item?.services ? item.services : []);
  };

  const isEmpty =
    services.length === 0 ||
    !user ||
    categoryList.length === 0 ||
    servicesList.length === 0;

  return {
    navigation,
    ativo,
    user,
    categoryList,
    services,
    isLoadingGetListCategory,
    handleSearch,
    activeItem,
    isEmpty,
  };
};

export default HomeViewModel;
