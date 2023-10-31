import React from "react";
import * as S from "./style";

const RadioButton = ({ selected, text, handleSelect }) => {
  return (
    <S.Container onPress={handleSelect}>
      <S.ContainerRadius>{selected && <S.ContainerSelect />}</S.ContainerRadius>
      <S.TextRadius>{text}</S.TextRadius>
    </S.Container>
  );
};

export default RadioButton;
