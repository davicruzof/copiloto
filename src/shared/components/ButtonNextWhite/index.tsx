import React from "react";
import icon from "../../../assets/arrowWhite.png";
import * as S from "./styles";
import { Image } from "react-native";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export function ButtonNextWhite({ text, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest}>
      <S.TextButton>{text}</S.TextButton>
      <Image source={icon} />
    </S.Container>
  );
}
