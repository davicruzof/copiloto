import React, { useEffect, useState } from "react";

import * as S from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ServiceRecommendResponse } from "../../services/user/types";
import { ServiceWithCheckbox } from "../../shared/components/ServiceWithCheckbox";
import HeaderAuth from "../../shared/components/HeaderAuth";
import { ScrollView } from "react-native";
import { ButtonNext } from "../../shared/components/ButtonNext";
import { ButtonNextWhite } from "../../shared/components/ButtonNextWhite";
import RecommendationServiceModal from "./modal";

const RecommendationService = () => {
  const navigation = useNavigation<any>();
  const [modalAtributtes, setModalAtributtes] = useState({
    title: "",
    content: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const { recommendServices } = route.params as {
    recommendServices: ServiceRecommendResponse[];
  };

  const [listSelections, setListSelections] = useState([]);

  const handleSelectService = (service: ServiceRecommendResponse) => {
    if (listSelections.includes(service.nome)) {
      const auxServices = [];
      listSelections.map((item) => {
        item !== service.nome && auxServices.push(item);
      });
      setListSelections(auxServices);
    } else {
      setListSelections([...listSelections, service.nome]);
    }
  };

  const handleInfo = (service: ServiceRecommendResponse) => {
    setModalVisible(!modalVisible);
    setModalAtributtes({
      title: service.nome,
      content: service.recommendation_text,
    });
  };

  const handleNextScreen = async () => {
    navigation.navigate("MapView");
  };

  useEffect(() => {
    recommendServices.map((item) =>
      setListSelections((old) => [...old, item.nome])
    );
  }, []);

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
                const isActive = listSelections.includes(item.nome);
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
            <ButtonNextWhite onPress={handleNextScreen} text="Não obrigado!" />
          </S.ButtonsContainer>
        </S.Wrapper>
      </S.Container>
      <RecommendationServiceModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={modalAtributtes.title}
        content={modalAtributtes.content}
      />
    </S.Background>
  );
};

export default RecommendationService;
