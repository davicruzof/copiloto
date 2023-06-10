import React from "react";
import { Image } from "react-native";

import iconDisabled from "../../../../assets/iconServiceDisabled.png";
import iconActive from "../../../../assets/iconActive.png";

import * as S from "./styles";

import icon from "../../../../assets/arrow2.png";

export const CardService = ({ text, isActive, handlePress }) => {
  const iconStatus = isActive ? iconActive : iconDisabled;
  return (
    <S.Container onPress={handlePress}>
      <S.Wrapper>
        <Image source={iconStatus} />
        <S.Title isActive={isActive}>{text}</S.Title>
      </S.Wrapper>
      {isActive && <Image source={icon} />}
    </S.Container>
  );
};
