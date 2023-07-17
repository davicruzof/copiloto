import React, { useState } from "react";

import { CalendarList, LocaleConfig } from "react-native-calendars";

import { Container } from "./styles";
import HeaderAuth from "../../shared/components/HeaderAuth";
import { DateUtils, Marked } from "./utils";
import { BottomSheet } from "./BottomSheet";

LocaleConfig.locales["pt-BR"] = DateUtils;

LocaleConfig.defaultLocale = "pt-BR";

const Schedules = () => {
  const [visible, setVisible] = useState(false);
  const [dataSelected, setDataSelected] = useState({});
  const Markeds = Marked();

  const viewListSchedules = (date: string) => {
    if (Markeds[date] !== undefined) {
      setVisible(!visible);
      setDataSelected(Markeds[date]);
    }
  };
  return (
    <Container>
      <HeaderAuth title="Agendamentos" />

      <CalendarList
        onDayPress={(day) => viewListSchedules(day.dateString)}
        markedDates={Markeds}
      />

      <BottomSheet
        data={dataSelected}
        visible={visible}
        setVisible={() => setVisible(!visible)}
      />
    </Container>
  );
};

export default Schedules;
