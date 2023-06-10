import React from "react";
import icon from "../../../assets/arrow3.png";
import * as S from "./styles";
import { Image } from "react-native";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  disable: boolean;
}

export function ButtonNext({ text, disable, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest} disable={disable}>
      <S.TextButton>{text}</S.TextButton>
      <Image source={icon} />
    </S.Container>
  );
}
