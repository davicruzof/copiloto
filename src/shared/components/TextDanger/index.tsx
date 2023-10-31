import React from "react";

import * as S from "./styles";

const TextDanger = ({ text }) => {
  return (
    <S.DangerContainer>
      <S.TextDanger>{text}</S.TextDanger>
    </S.DangerContainer>
  );
};
export default TextDanger;
