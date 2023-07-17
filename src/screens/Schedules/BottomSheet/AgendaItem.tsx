import React from "react";

import * as S from "./styles";

const AgendaItem = ({ data }: any) => {
  return (
    <S.ScheduleItem onPress={() => {}}>
      <S.Wrapper>
        <S.Title>{data.title}</S.Title>
        {data.servicos.map((item: any) => (
          <S.Services key={item.id}>{item.servico}</S.Services>
        ))}
      </S.Wrapper>
      <S.Value>R$: {data.value}</S.Value>
    </S.ScheduleItem>
  );
};

export default AgendaItem;
