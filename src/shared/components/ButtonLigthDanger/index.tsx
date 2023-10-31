import React from "react";

import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export function ButtonLigthDanger({ text, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest}>
      <S.TextButton>{text}</S.TextButton>
    </S.Container>
  );
}
