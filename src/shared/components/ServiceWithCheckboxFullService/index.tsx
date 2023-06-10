import React from "react";
import icon from "../../../assets/check.png";

import * as S from "./styles";
import { Image } from "react-native";

export function ServiceWithCheckboxFullService({
  handleSelectService,
  isActive,
  title,
}: any) {
  return (
    <S.Service onPress={handleSelectService}>
      <S.Checkbox active={isActive}>
        {isActive && <Image source={icon} />}
      </S.Checkbox>
      <S.ServiceTitle>{title}</S.ServiceTitle>
    </S.Service>
  );
}
