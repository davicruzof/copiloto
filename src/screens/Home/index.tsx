import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import { Spinner } from "@components/Spinner";

import HomeViewModel from "./HomeViewModel";
import * as S from "./styles";
import ListCategories from "@components/ListCategories";

const Home = () => {
  const {
    ativo,
    user,
    isEmpty,
    services,
    categories,
    activeItem,
    handleSearch,
    handleFullServices,
    isLoadingGetListCategory,
    handleFullServicesSelected,
  } = HomeViewModel();

  if (isLoadingGetListCategory) {
    return <Spinner />;
  }

  if (isEmpty) {
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
          <ListCategories
            categoryList={categories!}
            activeItem={activeItem}
            active={ativo}
          />

          <S.WrapperListServices>
            {services.length > 0 &&
              services.map((item, index) => {
                return (
                  index < 3 && (
                    <S.Service
                      key={item.nome}
                      onPress={() => handleFullServicesSelected(item)}
                    >
                      <S.ServiceTitle>{item.nome}</S.ServiceTitle>
                    </S.Service>
                  )
                );
              })}
            {services.length > 3 && (
              <S.Service onPress={handleFullServices}>
                <S.ServiceTitle>Ver todas as opções</S.ServiceTitle>
              </S.Service>
            )}
          </S.WrapperListServices>
        </ScrollView>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
