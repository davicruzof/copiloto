import React from "react";
import icon from "../../../assets/check.png";
import info from "../../../assets/info.png";

import * as S from "./styles";
import { Image } from "react-native";

interface ServiceWithCheckboxProps {
  handleSelectService: () => void;
  isActive: boolean;
  title: string;
  isInfo: boolean;
  infoHandle: () => void;
}

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
        <S.Checkbox active={isActive}>
          {isActive && <Image source={icon} />}
        </S.Checkbox>
        <S.ServiceTitle>{title}</S.ServiceTitle>
      </S.Content>
      {isInfo && (
        <S.InfoButton onPress={infoHandle}>
          <Image source={info} />
        </S.InfoButton>
      )}
    </S.Service>
  );
}
