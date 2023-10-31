import React from "react";

import * as S from "./styles";

import { ServiceWithCheckbox } from "@components/ServiceWithCheckbox";
import HeaderAuth from "@components/HeaderAuth";
import { ScrollView } from "react-native";
import { Spinner } from "@components/Spinner";
import RecommendationServiceModal from "./modal";
import RecommendationServiceHook from "./RecomendationHook";
import ModalCep from "@components/ModalCep";
import { Button } from "@components/Button";

const RecommendationService = () => {
  const {
    listSelections,
    navigation,
    recommendServices,
    modalVisible,
    modalAttributes,
    handleInfo,
    setModalVisible,
    handleNextScreen,
    handleSelectService,
    handleNextScreenEmpty,
    mutateGetCompanyLoading,
    stateModal,
    updateState,
    nextScreen,
    cep,
    setCep,
  } = RecommendationServiceHook();

  if (mutateGetCompanyLoading) {
    return <Spinner />;
  }
  return (
    <S.Background>
      <S.Container>
        <HeaderAuth
          title="Serviços recomendados"
          handlePressHeader={() => navigation.goBack()}
        />
        <S.Wrapper>
          <S.Title>
            Para os serviços selecionados recomendamos que você também faça:
          </S.Title>
          <S.WrapperListServices>
            <ScrollView>
              {recommendServices.map((item) => {
                const isActive = listSelections.includes(
                  item.recomended_id_service
                );
                return (
                  <ServiceWithCheckbox
                    title={item.nome}
                    key={item.nome}
                    isInfo={true}
                    infoHandle={() => handleInfo(item)}
                    isActive={isActive}
                    handleSelectService={() => handleSelectService(item)}
                  />
                );
              })}
            </ScrollView>
          </S.WrapperListServices>
          <S.ButtonsContainer>
            <Button
              isIcon
              type="primary"
              onPress={handleNextScreen}
              text="Incluir serviços recomenados"
              disable={listSelections.length === 0}
              disabled={listSelections.length === 0}
            />
            <Button
              type="secondary"
              isIcon
              onPress={handleNextScreenEmpty}
              text="Não obrigado!"
            />
          </S.ButtonsContainer>
        </S.Wrapper>
      </S.Container>

      <RecommendationServiceModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={modalAttributes.title}
        content={modalAttributes.content}
      />

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

export default RecommendationService;
