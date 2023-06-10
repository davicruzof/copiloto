import React from "react";
import { Image } from "react-native";
import icon from "../../../assets/arrow2.png";

import * as S from "./styles";

export const ButtonLigthNext = ({ text, ...props }) => {
  return (
    <S.ButtonRecovery {...props}>
      <S.RecoveryText>{text}</S.RecoveryText>
      <Image source={icon} />
    </S.ButtonRecovery>
  );
};
