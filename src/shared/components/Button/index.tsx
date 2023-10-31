import React from "react";

import * as S from "./styles";
import { ButtonProps } from "./types";

export function Button({ text, disable,type, isIcon, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest} disable={disable} isIcon={isIcon} type={type} >
      <S.TextButton type={type} >{text}</S.TextButton>
      {isIcon && <S.IconArrow type={type} />}
    </S.Container>
  );
}
