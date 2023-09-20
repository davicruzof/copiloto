import React from "react";

import * as S from "./styles";

import { ServiceWithCheckbox } from "../../shared/components/ServiceWithCheckbox";
import HeaderAuth from "../../shared/components/HeaderAuth";
import { ScrollView } from "react-native";
import { ButtonNext } from "../../shared/components/ButtonNext";
import { ButtonNextWhite } from "../../shared/components/ButtonNextWhite";
import RecommendationServiceModal from "./modal";
import RecommendationServiceHook from "./RecomendationHook";
import { Spinner } from "../../shared/components/Spinner";

const RecommendationService = () => {
  const {
    listSelections,
    recommendServices,
    navigation,
    modalAttributes,
    modalVisible,
    setModalVisible,
    handleNextScreen,
    handleSelectService,
    handleInfo,
    handleNextScreenEmpty,
    mutateGetCompanyLoading,
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
            <ButtonNext
              onPress={handleNextScreen}
              text="Incluir serviços recomenados"
              disable={listSelections.length === 0}
              disabled={listSelections.length === 0}
            />
            <ButtonNextWhite
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
    </S.Background>
  );
};

export default RecommendationService;
