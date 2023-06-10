import React from "react";
import { Image } from "react-native";
import icon from "../../../assets/arrow2.png";

import * as S from "./styles";

const ButtonOutLineNext = ({ text, handlePress }) => {
  return (
    <S.ButtonRecovery onPress={handlePress}>
      <S.RecoveryText>{text}</S.RecoveryText>
      <Image source={icon} />
    </S.ButtonRecovery>
  );
};

export default ButtonOutLineNext;
