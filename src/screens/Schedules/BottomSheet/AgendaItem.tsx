import React from "react";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

const AgendaItem = ({ data, setVisible }: any) => {
  const navigation = useNavigation<any>();

  const detailsBudget = (budget: any) => {
    setVisible(false);
    navigation.navigate("BudgetDetails", { budget });
  };

  return (
    <S.ScheduleItem onPress={() => detailsBudget(data)}>
      <S.Wrapper>
        <S.Title>{data.title}</S.Title>
        {data.servicos.map((item: any, index: any) => (
          <S.Services key={index}>{item.servico}</S.Services>
        ))}
      </S.Wrapper>
      <S.Value>R$: {data.value}</S.Value>
    </S.ScheduleItem>
  );
};

export default AgendaItem;
