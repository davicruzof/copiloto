import React from "react";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";

export function ServiceWithCheckboxFullService({
  handleSelectService,
  isActive,
  title,
}: any) {
  return (
    <S.Service onPress={handleSelectService}>
      <S.Checkbox active={isActive}>
        {isActive && <AntDesign name="check" size={14} color="#fff" />}
      </S.Checkbox>
      <S.ServiceTitle>{title}</S.ServiceTitle>
    </S.Service>
  );
}
