import { MarkedDates } from "react-native-calendars/src/types";
import { data } from "./util";
import { Schedule } from "@services/schedule/types";

// export const Marked = {
//   ["2023-07-15"]: {
//     selected: true,
//     selectedColor: "#2C94F4",
//   },
//   ["2023-07-20"]: {
//     selected: true,
//     selectedColor: "#2C94F4",
//   },
//   ["2023-08-02"]: {
//     selected: true,
//     selectedColor: "#2C94F4",
//   },
// };

export const DateUtils = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  today: "Hoje",
};

export function Marked(data: Schedule[]) {
  const marked: MarkedDates = {};

  data.map((item) => {
    marked[item.schedule_date] = {
      selected: true,
      selectedColor: "#2C94F4",
      ...item,
    };
  });

  return marked;
}
