import { ScrollView, View } from "react-native";

import * as S from "./styles";
import HeaderAuth from "@components/HeaderAuth";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { TimeLine } from "./TimeLine";
import { Fragment } from "react";
import { Button } from "@components/Button";

export function BudgetDetails() {
  const navigation = useNavigation();
  const { params } = useRoute();

  const data = params.budget;

  const Status = (status: "accept" | "pedding" | "progress") => {
    if (status === "accept") {
      return "Proposta aceita";
    }
    if (status === "progress") {
      return "Proposta pendente de aprovação";
    }
    return "Sem propostas";
  };

  return (
    <S.Container>
      <HeaderAuth
        title="Detalhes"
        handlePressHeader={() => navigation.goBack()}
      />
      <S.Wrapper>
        <S.Header>
          <View
            style={{
              width: 64,
              height: 59.12,
              borderRadius: 5.42373,
              backgroundColor: "#c4c4c4",
              marginRight: 16,
            }}
          />
          <S.WrapperHeader>
            <S.TitleHeader>{data.title}</S.TitleHeader>
            <S.InfoContainer>
              <FontAwesome5 name="map-marker-alt" size={16} color="#2C94F4" />
              <S.TextInfo>10m distante</S.TextInfo>
            </S.InfoContainer>
          </S.WrapperHeader>
        </S.Header>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, marginBottom: 150 }}
        >
          <S.ButtonChat>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={16}
              color="#2C94F4"
            />
            <S.ButtonChatTex>Falar com a oficina</S.ButtonChatTex>
          </S.ButtonChat>

          {data.status === "accept" && <TimeLine />}

          {data.servicos && data.servicos.length > 0 && (
            <>
              <S.Title>Serviços</S.Title>
              {data.servicos.map((item: any, index: any) => {
                return (
                  <Fragment key={index}>
                    <S.Line />
                    <S.WrapperService>
                      <S.ItemLabel>{item.servico}</S.ItemLabel>
                      <S.Value>R$ {item.proposta}</S.Value>
                    </S.WrapperService>
                  </Fragment>
                );
              })}
            </>
          )}

          <S.Line />

          <S.Title>Sobre o agendamento</S.Title>
          <S.Line />
          <S.WrapperService>
            <S.ItemLabel>Meu carro</S.ItemLabel>
            <S.Value>Celta 2008</S.Value>
          </S.WrapperService>
          <S.Line />
          <S.WrapperService>
            <S.ItemLabel>Data</S.ItemLabel>
            <S.Value>{data.data}</S.Value>
          </S.WrapperService>
          <S.Line />
          <S.WrapperService>
            <S.ItemLabel>Status</S.ItemLabel>
            <S.Value>{Status(data.status)}</S.Value>
          </S.WrapperService>

          {data.status !== "accept" && (
            <S.ButtonWrapper>
              <Button type="primary" text="Aceitar proposta" />
              <Button type="secondary" text="Descartar" />
            </S.ButtonWrapper>
          )}
        </ScrollView>
      </S.Wrapper>
    </S.Container>
  );
}
