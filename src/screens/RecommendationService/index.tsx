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
    cep,
    setCep,
    handleInfo,
    navigation,
    stateModal,
    updateState,
    modalVisible,
    modalAttributes,
    setModalVisible,
    handleNextScreen,
    recommendsServices,
    handleSelectService,
    handleNextScreenModal,
    handleNextScreenEmpty,
    servicesRecommendationSelected,
  } = RecommendationServiceHook();

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
              {recommendsServices.map((item) => {
                const isActive = servicesRecommendationSelected.includes(
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
              disable={servicesRecommendationSelected.length === 0}
              disabled={servicesRecommendationSelected.length === 0}
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
        cep={cep}
        setCep={setCep}
        stateModal={stateModal}
        updateState={updateState}
        nextScreen={handleNextScreenModal}
      />
    </S.Background>
  );
};

export default RecommendationService;
