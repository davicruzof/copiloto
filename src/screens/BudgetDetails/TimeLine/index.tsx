import { AntDesign } from "@expo/vector-icons";
import * as S from "./styles";

export function TimeLine() {
  return (
    <S.TimeLine>
      <S.WrapperInfoTimeLine>
        <S.CheckBox active>
          <AntDesign name="check" size={16} color="#fff" />
        </S.CheckBox>
        <S.WrapperTextTimeLine>
          <S.TitleTimeLine>Solicitação enviada</S.TitleTimeLine>
          <S.DescriptionTimeLine>Descricao</S.DescriptionTimeLine>
        </S.WrapperTextTimeLine>
      </S.WrapperInfoTimeLine>
      <S.LineTimeLine />
      <S.WrapperInfoTimeLine>
        <S.CheckBox>
          <AntDesign name="check" size={16} color="#fff" />
        </S.CheckBox>
        <S.WrapperTextTimeLine>
          <S.TitleTimeLine>Solicitação confirmada</S.TitleTimeLine>
          <S.DescriptionTimeLine>
            Quando a oficina confirma o agendamento
          </S.DescriptionTimeLine>
        </S.WrapperTextTimeLine>
      </S.WrapperInfoTimeLine>
      <S.LineTimeLine />
      <S.WrapperInfoTimeLine>
        <S.CheckBox>
          <AntDesign name="check" size={16} color="#fff" />
        </S.CheckBox>
        <S.WrapperTextTimeLine>
          <S.TitleTimeLine>Início dos trabalhos</S.TitleTimeLine>
          <S.DescriptionTimeLine>
            O trabalho solicitado é iniciado
          </S.DescriptionTimeLine>
        </S.WrapperTextTimeLine>
      </S.WrapperInfoTimeLine>
    </S.TimeLine>
  );
}
