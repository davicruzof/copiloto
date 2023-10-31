import React from "react";
import { View } from "react-native";

import * as S from "./styles";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { ServicesCompany } from "@services/company/types";

export const CardList: React.FC<{
  data: ServicesCompany;
  handlePress: () => void;
}> = ({ data, handlePress, ...rest }) => {

  return (
    <S.Container onPress={handlePress} {...rest}>
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
          <S.Title>{data.title}</S.Title>
          <S.Value>R$: {data.value}</S.Value>
        </S.HeaderInfoContainer>
        <S.LocationContainer>
          <S.InfoContainer>
            <FontAwesome5 name="map-marker-alt" size={16} color="#2C94F4" />
            <S.TextInfo>{data.distance} metros distante</S.TextInfo>
          </S.InfoContainer>
          {Boolean(data.isHouse) && (
            <S.InfoContainer>
              <AntDesign name="home" size={16} color="black" />
            </S.InfoContainer>
          )}
        </S.LocationContainer>
      </View>
    </S.Container>
  );
};
