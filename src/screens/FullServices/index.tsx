import React from "react";
import { ScrollView } from "react-native";

import HeaderAuth from "@components/HeaderAuth";
import { Spinner } from "@components/Spinner";
import { ServiceWithCheckboxFullService } from "./components/ServiceWithCheckboxFullService";
import ModalCep from "@components/ModalCep";
import FullServicesHook from "./FullServicesHook";
import * as S from "./styles";
import ListCategories from "@components/ListCategories";
import { Button } from "@components/Button";

const FullServices = () => {
  const {
    isLoading,
    navigation,
    categoryList,
    activeItem,
    ativo,
    services,
    handleRecommendation,
    handleSelectService,
    listSelections,
    mutateGetCompanyLoading,
    cep,
    setCep,
    updateState,
    stateModal,
    nextScreen,
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
            <ListCategories
              categoryList={categoryList}
              activeItem={activeItem}
              active={ativo}
            />
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
          <Button
            type="primary"
            isIcon
            text="Confirmar dados"
            onPress={handleRecommendation}
            disable={listSelections.length === 0}
            disabled={listSelections.length === 0}
          />
        </S.Wrapper>
      </S.Container>
      <ModalCep
        updateState={updateState}
        nextScreen={nextScreen}
        cep={cep}
        setCep={setCep}
        stateModal={stateModal}
      />
    </S.Background>
  );
};

export default FullServices;
