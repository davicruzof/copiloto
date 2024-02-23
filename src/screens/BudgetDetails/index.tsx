import { Alert, Image, ScrollView, View } from "react-native";

import * as S from "./styles";
import HeaderAuth from "@components/HeaderAuth";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { TimeLine } from "./TimeLine";
import { Fragment, useEffect, useState } from "react";
import { Button } from "@components/Button";
import { Details, Schedule } from "@services/schedule/types";
import { useMutation } from "@tanstack/react-query";
import { getScheduleDetails } from "@services/schedule/schedule";
import { Spinner } from "@components/Spinner";
import { DateTime } from "luxon";

export function BudgetDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const [detailsServices, setDetailsServices] = useState<Details>(
    {} as Details
  );

  const { budget } = route.params as { budget: Schedule };

  const { mutate: MutateGetSchedules, isLoading } = useMutation({
    mutationFn: (id: number) => getScheduleDetails(id),
    onSuccess: async (data) => {
      if (data.success && data.data.length > 0) {
        setDetailsServices(data.data[0]);
      } else {
        Alert.alert(
          "Copiloto",
          "Desculpe, estamos com problemas. Tente novamente mais tarde."
        );
      }
    },
    onError: () => {
      Alert.alert(
        "Copiloto",
        "Desculpe, estamos com problemas. Tente novamente mais tarde."
      );
    },
  });

  useEffect(() => {
    MutateGetSchedules(+budget.id);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (detailsServices === null) {
    return <></>;
  }

  return (
    <S.Container>
      <HeaderAuth
        title="Detalhes"
        handlePressHeader={() => navigation.goBack()}
      />
      <S.Wrapper>
        <S.Header>
          <Image
            source={{uri: detailsServices.company_image}}
            style={{
              width: 64,
              height: 59.12,
              borderRadius: 5.42373,
              borderColor: "#c4c4c4",
              borderWidth: 1,
              marginRight: 16,
            }}
          />
          <S.WrapperHeader>
            <S.TitleHeader>{detailsServices.title}</S.TitleHeader>
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

          {detailsServices?.status_history &&
            detailsServices.status_history.length > 0 && (
              <TimeLine status={detailsServices.status_history} />
            )}

          {detailsServices.services && detailsServices.services.length > 0 && (
            <>
              <S.Title>Serviços</S.Title>
              {detailsServices.services.map((item: any, index: any) => {
                return (
                  <Fragment key={index}>
                    <S.Line />
                    <S.WrapperService>
                      <S.ItemLabel>{item.title}</S.ItemLabel>
                      <S.Value>R$ {item.value}</S.Value>
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
            <S.Value>
              {new Date(detailsServices.date).toLocaleString("pt-BR", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              })}
            </S.Value>
          </S.WrapperService>
          <S.Line />
          <S.WrapperService>
            <S.ItemLabel>Status</S.ItemLabel>
            <S.Value>{budget.status}</S.Value>
          </S.WrapperService>

          {/* {budget.status !== "accept" && (
            <S.ButtonWrapper>
              <Button type="primary" text="Aceitar proposta" />
              <Button type="secondary" text="Descartar" />
            </S.ButtonWrapper>
          )} */}
        </ScrollView>
      </S.Wrapper>
    </S.Container>
  );
}
