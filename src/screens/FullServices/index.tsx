import React from "react";
import { ScrollView } from "react-native";

import * as S from "./styles";
import { ButtonNext } from "../../shared/components/ButtonNext";
import HeaderAuth from "../../shared/components/HeaderAuth";
import { Spinner } from "../../shared/components/Spinner";
import { ServiceWithCheckboxFullService } from "../../shared/components/ServiceWithCheckboxFullService";
import FullServicesHook from "./FullServicesHook";

const FullServices = () => {
  const {
    isLoading,
    navigation,
    categoryList,
    activeItem,
    setLoadingImages,
    loadingImages,
    ativo,
    services,
    handleRecommendation,
    handleSelectService,
    listSelections,
    mutateGetCompanyLoading,
  } = FullServicesHook();

  if (isLoading || mutateGetCompanyLoading) {
    return <Spinner />;
  }

  return (
    <S.Background>
      <S.Container>
        <HeaderAuth
          title="Buscar"
          handlePressHeader={() => navigation.goBack()}
        />
        <S.Wrapper>
          <S.WrapperList>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
            </ScrollView>
          </S.WrapperList>
          <S.WrapperListServices>
            <ScrollView showsVerticalScrollIndicator={false}>
              {services.length > 0 &&
                services.map((item) => {
                  const isActive = listSelections.includes(item.idservice);
                  return (
                    <ServiceWithCheckboxFullService
                      title={item.nome}
                      key={item.nome}
                      isActive={isActive}
                      handleSelectService={() => handleSelectService(item)}
                    />
                  );
                })}
            </ScrollView>
          </S.WrapperListServices>
          <ButtonNext
            text="Confirmar dados"
            onPress={handleRecommendation}
            disable={listSelections.length === 0}
            disabled={listSelections.length === 0}
          />
        </S.Wrapper>
      </S.Container>
    </S.Background>
  );
};

export default FullServices;
