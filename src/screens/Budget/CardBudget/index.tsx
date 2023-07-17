import { Image } from "react-native";
import icon from "../../../assets/arrow2.png";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export function CardBudget({ budget }: any) {
  const Status = (status: "accept" | "pedding" | "progress") => {
    if (status === "accept") {
      return "Proposta aceita";
    }
    if (status === "progress") {
      return "Proposta pendente de aprovação";
    }
    return "Sem propostas";
  };

  const navigation = useNavigation<any>();

  const detailsBudget = (budget: any) => {
    navigation.navigate("BudgetDetails", { budget });
  };

  return (
    <S.Container>
      <S.Header onPress={() => detailsBudget(budget)}>
        <S.WrapperHeader>
          <S.Image />
          <S.HeaderTitle>{budget.name}</S.HeaderTitle>
        </S.WrapperHeader>
        <Image source={icon} />
      </S.Header>
      <S.Line />
      <S.Wrapper>
        <S.ItemLabel>Proposta</S.ItemLabel>
        <S.Value>R$ {budget.proposta}</S.Value>
      </S.Wrapper>
      <S.Line></S.Line>
      <S.Wrapper>
        <S.ItemLabel>Data</S.ItemLabel>
        <S.Value>{budget.data}</S.Value>
      </S.Wrapper>
      <S.Line></S.Line>
      <S.Wrapper>
        <S.ItemLabel>Status</S.ItemLabel>
        <S.Value>{Status(budget.status)}</S.Value>
      </S.Wrapper>
    </S.Container>
  );
}
