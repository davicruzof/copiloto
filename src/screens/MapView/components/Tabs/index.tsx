import React from "react";

import * as S from "./styles";

export const Tabs = ({ active, setActive }) => {
  return (
    <S.Container>
      <S.ButtonTab isActive={active === "map"} onPress={() => setActive("map")}>
        <S.ButtonText isActive={active === "map"}>
          Escolher oficina
        </S.ButtonText>
      </S.ButtonTab>
      <S.ButtonTab
        isActive={active === "orcamento"}
        onPress={() => setActive("orcamento")}
      >
        <S.ButtonText isActive={active === "orcamento"}>
          Receber orçamentos
        </S.ButtonText>
      </S.ButtonTab>
    </S.Container>
  );
};
