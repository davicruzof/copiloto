import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";

import { getListCategory } from "../../services/user/user";
import { CategoryResponse, ServiceResponse } from "../../services/user/types";
import { Alert, ScrollView, View } from "react-native";
import { Spinner } from "../../shared/components/Spinner";
import { UserContext } from "../../contexts/userContext";

import * as S from "./styles";

const Home = () => {
  const navigation = useNavigation<any>();
  const [ativo, setAtivo] = useState("");
  const {
    user: { user },
  } = useContext(UserContext);
  const [categoryList, setCategoryList] = useState<CategoryResponse[]>([]);
  const [services, setServices] = useState<ServiceResponse[]>([]);
  const [servicesList, setServicesList] = useState<ServiceResponse[]>([]);
  const [loadingImages, setLoadingImages] = useState(true);

  const { isLoading: isLoadingGetListCategory, refetch: refetchCategorias } =
    useQuery({
      queryKey: ["todos"],
      queryFn: getListCategory,
      onSuccess: ({ data }) => {
        if (data && data.length > 0) {
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
        // Alert.alert(
        //   "Copiloto",
        //   "Desculpe, estamos com problemas. Tente novamente mais tarde.",
        //   [{ text: "Tentar novamente", onPress: () => refetchCategorias() }]
        // );
      },
    });

  const handleSearch = () => {
    navigation.navigate("SearchHome", { services: servicesList, categoryList });
  };

  const activeItem = (item: CategoryResponse) => {
    setAtivo(item.nome);
    setServices(item?.services ? item.services : []);
  };

  if (isLoadingGetListCategory) {
    return <Spinner />;
  }

  if (
    services.length === 0 ||
    !user ||
    categoryList.length === 0 ||
    servicesList.length === 0
  ) {
    return <View />;
  }

  return (
    <S.Container>
      <StatusBar style="dark" translucent={false} backgroundColor="#FDFDFD" />
      <S.Wrapper>
        <S.Username>Olá {user.nome.split(" ")[0]} 👋</S.Username>
        <S.Settings>O que você precisa fazer hoje?</S.Settings>
        <S.Search onPress={handleSearch}>
          <S.IconSearch />
          <S.SearchText>Busque por serviços</S.SearchText>
        </S.Search>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <S.WrapperList>
              {categoryList.length > 0 &&
                categoryList.map((item) => {
                  const isActive = ativo === item.nome;
                  return (
                    <S.CardContainer
                      key={item.nome}
                      onPress={() => activeItem(item)}
                    >
                      <S.CardContainerIcon isActive={isActive}>
                        <S.CardIcon
                          onLoadEnd={() => setLoadingImages(false)}
                          source={{
                            uri: isActive ? item.icon_white : item.icon_gray,
                          }}
                        />
                        {loadingImages && <Spinner />}
                      </S.CardContainerIcon>
                      <S.TitleCardCategoria isActive={isActive}>
                        {item.nome}
                      </S.TitleCardCategoria>
                    </S.CardContainer>
                  );
                })}
            </S.WrapperList>
          </ScrollView>

          <S.WrapperListServices>
            {services.length > 0 &&
              services.map((item, index) => {
                return index < 4 ? (
                  index === 3 ? (
                    <S.Service
                      key={item.nome}
                      onPress={() =>
                        navigation.navigate("FullServices", {
                          services,
                          categoryList,
                        })
                      }
                    >
                      <S.ServiceTitle>Ver todas as opções</S.ServiceTitle>
                    </S.Service>
                  ) : (
                    <S.Service
                      key={item.nome}
                      onPress={() =>
                        navigation.navigate("FullServices", {
                          services,
                          categoryList,
                          selectItem: item,
                        })
                      }
                    >
                      <S.ServiceTitle>{item.nome}</S.ServiceTitle>
                    </S.Service>
                  )
                ) : null;
              })}
          </S.WrapperListServices>
        </ScrollView>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
