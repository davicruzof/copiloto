import React, { Suspense, useContext, useEffect, useState } from "react";

import { CalendarList, LocaleConfig } from "react-native-calendars";

import { Container } from "./styles";
import HeaderAuth from "../../shared/components/HeaderAuth";
import { DateUtils, Marked } from "./utils";
import { BottomSheet } from "./BottomSheet";
import { Spinner } from "../../shared/components/Spinner";
// import { DateTime } from "luxon";
import { UserContext } from "@contexts/userContext";
import { Alert } from "react-native";
import { getSchedules } from "@services/schedule/schedule";
import { useMutation } from "@tanstack/react-query";
// import { Schedule } from "@services/schedule/types";
import { MarkedDates } from "react-native-calendars/src/types";
import { useIsFocused } from "@react-navigation/native";

LocaleConfig.locales["pt-BR"] = DateUtils;

LocaleConfig.defaultLocale = "pt-BR";

const Schedules = () => {
  const isFocused = useIsFocused();
  const [visible, setVisible] = useState(false);
  const [dataSelected, setDataSelected] = useState({});
  const [Markeds, setMarkeds] = useState<MarkedDates>({});

  const { user } = useContext(UserContext);

  const { mutate: MutateGetSchedules, isLoading } = useMutation({
    mutationFn: (id: number) => getSchedules(id),
    onSuccess: async (data) => {
      if (data.success) {
        setMarkeds(Marked(data.data));
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

  const viewListSchedules = (date: string) => {
    if (Markeds[date] !== undefined) {
      setVisible(!visible);
      setDataSelected(Markeds[date]);
    }
  };

  useEffect(() => {
    MutateGetSchedules(user.user.idUser);
  }, [isFocused]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Suspense fallback={<Spinner />}>
      <Container>
        <HeaderAuth title="Agendamentos" />

        <CalendarList
          onDayPress={(day) => viewListSchedules(day.dateString)}
          markedDates={Markeds}
          initialScrollIndex={1}
        />

        <BottomSheet
          data={dataSelected}
          visible={visible}
          setVisible={() => setVisible(!visible)}
        />
      </Container>
    </Suspense>
  );
};

export default Schedules;
