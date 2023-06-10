import React from "react";

import * as S from "./styles";

export const MarkerPoint = ({ value }) => {
  return (
    <S.Button>
      <S.TextContainer>
        <S.Value>R$: {value}</S.Value>
      </S.TextContainer>
      <S.Bullet>
        <S.Point />
      </S.Bullet>
    </S.Button>
  );
};
