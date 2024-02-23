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
  } = FullServicesHook();

  if (isLoading) {
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
              active={ativo}
              categoryList={categoriesList}
              activeItem={handleChangeCategory}
            />
          </S.WrapperList>
          <S.WrapperListServices>
            <ScrollView showsVerticalScrollIndicator={false}>
              {services.length > 0 &&
                services.map((item) => {
                  const isActive = servicesSelected.includes(item.idservice);
                  return (
                    <ServiceWithCheckboxFullService
                      key={item.nome}
                      title={item.nome}
                      isActive={isActive}
                      handleSelectService={() => handleSelectService(item)}
                    />
                  );
                })}
            </ScrollView>
          </S.WrapperListServices>
          <Button
            isIcon
            type="primary"
            text="Confirmar dados"
            onPress={handleNextScreen}
            disable={servicesSelected.length === 0}
            disabled={servicesSelected.length === 0}
          />
        </S.Wrapper>
      </S.Container>
      <ModalCep
        cep={cep}
        setCep={setCep}
        stateModal={stateModal}
        updateState={updateState}
        nextScreen={handleNextScreenModal}
      />
    </S.Background>
  );
};

export default FullServices;
