import React from "react";

import * as S from "./styles";
import HeaderAuth from "../../shared/components/HeaderAuth";
import { CardBudget } from "./CardBudget";
import { Image } from "react-native";
import icon from "../../assets/settings.png";
import { ScrollView } from "react-native";

const Budget = () => {
  return (
    <S.Container>
      <HeaderAuth title="Orcamentos" />

      <S.Wrapper>
        <S.Button active>
          <Image source={icon} />
          <S.ButtonText>Orçamentos aceitos</S.ButtonText>
        </S.Button>
        <S.Title>Orçamentos para Troca de óleo:</S.Title>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 160 }}
        >
          <CardBudget
            proposta="120,00"
            data="20/02/2020"
            status="Proposta pendente de aprovação"
            name="Oficina Lima"
          />
          <CardBudget
            proposta="120,00"
            data="20/02/2020"
            status="sem proposta"
            name="Oficina Zé"
          />
          <CardBudget
            proposta="120,00"
            data="20/02/2020"
            status="Proposta pendente de aprovação"
            name="Oficina Lima"
          />
          <CardBudget
            proposta="120,00"
            data="20/02/2020"
            status="sem proposta"
            name="Oficina Zé"
          />
        </ScrollView>
      </S.Wrapper>
    </S.Container>
  );
};

export default Budget;
