import React from "react";

import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  isBorder?: boolean;
}

export function ButtonLigth({ text, isBorder, ...rest }: ButtonProps) {
  return (
    <S.Container isBorder={isBorder} {...rest}>
      <S.TextButton>{text}</S.TextButton>
    </S.Container>
  );
}
