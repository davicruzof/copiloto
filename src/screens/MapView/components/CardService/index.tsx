import React from "react";
import { Image } from "react-native";

import iconDisabled from "@assets/iconServiceDisabled.png";
import iconActive from "@assets/iconActive.png";
import { MaterialIcons } from "@expo/vector-icons";

import * as S from "./styles";
import theme from "@utils/theme";

export const CardService = ({
  text,
  isActive,
  handlePress,
}: {
  text: string;
  isActive: boolean;
  handlePress: () => void;
}) => {
  const iconStatus = isActive ? iconActive : iconDisabled;
  return (
    <S.Container onPress={handlePress}>
      <S.Wrapper>
        <Image source={iconStatus} />
        <S.Title isActive={isActive}>{text}</S.Title>
      </S.Wrapper>
      {isActive && (
        <MaterialIcons
          name="keyboard-arrow-right"
          size={28}
          color={theme.colors.primary}
        />
      )}
    </S.Container>
  );
};
