import React from "react";
import { PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";

interface ButtonProps extends PressableProps {
  text: string;
  disable: boolean;
}

export function ButtonNext({ text, disable, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest} disable={disable}>
      <S.TextButton>{text}</S.TextButton>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
    </S.Container>
  );
}
