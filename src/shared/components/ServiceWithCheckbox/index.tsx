import React from "react";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import theme from "@utils/theme";

import { ServiceWithCheckboxProps } from "./types";
import * as S from "./styles";



export function ServiceWithCheckbox({
  handleSelectService,
  isActive,
  title,
  isInfo = false,
  infoHandle,
}: ServiceWithCheckboxProps) {
  return (
    <S.Service>
      <S.Content onPress={handleSelectService}>
        {isActive ? (
          <AntDesign
            name="checkcircle"
            size={16}
            color={theme.colors.primary}
          />
        ) : (
          <S.Checkbox />
        )}
        <S.ServiceTitle>{title}</S.ServiceTitle>
      </S.Content>
      {isInfo && (
        <S.InfoButton onPress={infoHandle}>
          <Feather name="info" size={24} color={theme.colors.primary} />
        </S.InfoButton>
      )}
    </S.Service>
  );
}
