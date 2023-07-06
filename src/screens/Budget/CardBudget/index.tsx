import { Image } from "react-native";
import icon from "../../../assets/arrow2.png";
import * as S from "./styles";

export function CardBudget({ proposta, data, status, name }) {
  return (
    <S.Container>
      <S.Header>
        <S.WrapperHeader>
          <S.Image />
          <S.HeaderTitle>{name}</S.HeaderTitle>
        </S.WrapperHeader>
        <Image source={icon} />
      </S.Header>
      <S.Line />
      <S.Wrapper>
        <S.ItemLabel>Proposta</S.ItemLabel>
        <S.Value>R$ {proposta}</S.Value>
      </S.Wrapper>
      <S.Line></S.Line>
      <S.Wrapper>
        <S.ItemLabel>Data</S.ItemLabel>
        <S.Value>{data}</S.Value>
      </S.Wrapper>
      <S.Line></S.Line>
      <S.Wrapper>
        <S.ItemLabel>Status</S.ItemLabel>
        <S.Value>{status}</S.Value>
      </S.Wrapper>
    </S.Container>
  );
}
