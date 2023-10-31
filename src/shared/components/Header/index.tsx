import React from "react";
import { Image, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";
import theme from "@utils/theme";

const Header: React.FC<{
  handlePressHeader: () => void;
  title: string;
}> = ({ handlePressHeader, title }) => {
  return (
    <S.Container>
      <StatusBar translucent backgroundColor="transparent" />
      <S.Wrapper>
        <S.ButtonBack onPress={handlePressHeader}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={32}
            color={theme.colors.primary}
          />
        </S.ButtonBack>
        <S.Title>{title}</S.Title>
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
