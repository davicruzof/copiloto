import React, { useContext } from "react";
import { View } from "react-native";

import * as S from "./styles";

import { ButtonLigthDanger } from "../../../../shared/components/ButtonLigthDanger";
import { ButtonLigthNext } from "../../../../shared/components/ButtonLigthNext";
import { BottomSheet } from "react-native-btr";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { ButtonNext } from "../../../../shared/components/ButtonNext";
import { useNavigation } from "@react-navigation/native";
import { OrcamentoContext } from "../../../../contexts/orcamento";

export const BottomSheetOffice = ({ visible, setVisible, data, type }: any) => {
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation<any>();

  const { setOrcamento } = useContext(OrcamentoContext);

  const handleAddService = () => {
    setOrcamento((old) => (old !== null ? [...old, data] : [data]));
    navigation.navigate("MapView", { section: "orcamento" });
    setVisible();
  };

  return (
    <BottomSheet visible={visible} onBackButtonPress={setVisible}>
      <S.Container bottom={bottom}>
        <S.Header>
          <View
            style={{
              width: 64,
              height: 59.12,
              borderRadius: 5.42373,
              backgroundColor: "#c4c4c4",
              marginRight: 16,
            }}
          />
          <View>
            <S.HeaderInfoContainer>
              <S.Title>{data?.title}</S.Title>
              {data?.rating && (
                <S.InfoContainer>
                  <AntDesign name="star" size={16} color="#2C94F4" />
                  <S.TextInfo>{data.rating}</S.TextInfo>
                </S.InfoContainer>
              )}
            </S.HeaderInfoContainer>
            <S.LocationContainer>
              <S.InfoContainer>
                <FontAwesome5 name="map-marker-alt" size={16} color="#2C94F4" />
                <S.TextInfo>{data?.distance}m distante</S.TextInfo>
              </S.InfoContainer>
              {data?.isHouse && (
                <S.InfoContainer>
                  <AntDesign name="home" size={16} color="black" />
                  <S.TextInfo>Atende a domicílio</S.TextInfo>
                </S.InfoContainer>
              )}
            </S.LocationContainer>
          </View>
        </S.Header>
        <S.DividerLine />
        <ButtonNext
          text={type === "add" ? "Incluir para orçamento" : "Agendar agora"}
          onPress={handleAddService}
          disable={false}
        />
        {type !== "add" && <ButtonLigthNext text="Solicitar orçamento" />}
        <ButtonLigthDanger text="fechar" onPress={setVisible} />
      </S.Container>
    </BottomSheet>
  );
};
