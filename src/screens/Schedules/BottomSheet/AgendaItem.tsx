import React from "react";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Schedule } from "@services/schedule/types";
import { getScheduleDetails } from "@services/schedule/schedule";
import { useMutation } from "@tanstack/react-query";
import { Alert } from "react-native";

const AgendaItem = ({ data, setVisible }: {
  data: Schedule;
  setVisible: any;
}) => {
  const navigation = useNavigation<any>();

  const detailsBudget = (budget: Schedule) => {
    setVisible(false);
    navigation.navigate("BudgetDetails", { budget });
  };

  return (
    <S.ScheduleItem onPress={() => detailsBudget(data)}>
      <S.Wrapper>
        <S.Title>{data.company_name}</S.Title>
        {data.services.map((item: any, index: any) => (
          <S.Services key={index}>{item.service}</S.Services>
        ))}
      </S.Wrapper>
      <S.Value>R$: {data.value}</S.Value>
    </S.ScheduleItem>
  );
};

export default AgendaItem;
