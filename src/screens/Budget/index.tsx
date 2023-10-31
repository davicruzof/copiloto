import React, { useState } from "react";

import * as S from "./styles";
import HeaderAuth from "../../shared/components/HeaderAuth";
import { CardBudget } from "./CardBudget";
import { Image } from "react-native";
import icon from "../../assets/settings.png";
import { ScrollView } from "react-native";

const DATAACCPEPT = [
  {
    value: "120,00",
    data: "20/02/2020",
    status: "accept",
    title: "Oficina Lima",
    servicos: [
      {
        servico: "Troca do filtro de ar",
        proposta: "220,00",
      },
      {
        servico: "Troca de pastilhas de freio",
        proposta: "310,00",
      },
    ],
  },
  {
    value: "110,00",
    data: "21/02/2020",
    status: "accept",
    title: "Oficina Soares",
    servicos: [
      {
        servico: "Troca de óleo",
        proposta: "120,00",
      },
    ],
  },
  {
    value: "140,00",
    data: "19/02/2020",
    status: "accept",
    title: "Oficina Zé",
    servicos: [
      {
        servico: "Troca de pneus",
        proposta: "310,00",
      },
    ],
  },
];

const DATA = [
  {
    value: "120,00",
    data: "23/03/2020",
    status: "progress",
    title: "Car Clean",
    servicos: [
      {
        servico: "Troca de óleo",
        proposta: "120,00",
      },
      {
        servico: "Troca de pneus",
        proposta: "310,00",
      },
    ],
  },
  {
    value: "110,00",
    data: "21/02/2020",
    status: "pedding",
    title: "Carros Seguros",
    servicos: [
      {
        servico: "Alinhamento",
        proposta: "80,00",
      },
      {
        servico: "Troca de óleo",
        proposta: "90,00",
      },
    ],
  },
  {
    value: "140,00",
    data: "19/02/2020",
    status: "pedding",
    title: "Carro conserto",
    servicos: [
      {
        servico: "Troca de óleo",
        proposta: "120,00",
      },
      {
        servico: "Troca de pneus",
        proposta: "310,00",
      },
    ],
  },
];

const Budget = () => {
  const [filterAccept, setFilterAccept] = useState(false);

  const data = filterAccept ? DATAACCPEPT : DATA;
  return (
    <S.Container>
      <HeaderAuth title="Meus Orcamentos" />

      <S.Wrapper>
        <S.Button
          active={filterAccept}
          onPress={() => {
            setFilterAccept(!filterAccept);
          }}
        >
          <Image source={icon} />
          <S.ButtonText>Orçamentos aceitos</S.ButtonText>
        </S.Button>
        <S.Title>Orçamentos para Troca de óleo:</S.Title>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 160 }}
        >
          {data.length > 0 &&
            data.map((item, index) => {
              return <CardBudget key={index} budget={item} />;
            })}
        </ScrollView>
      </S.Wrapper>
    </S.Container>
  );
};

export default Budget;
