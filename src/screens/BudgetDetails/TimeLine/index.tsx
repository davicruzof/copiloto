import { AntDesign } from "@expo/vector-icons";
import * as S from "./styles";
import { StatusHistory } from "@services/schedule/types";
import { Fragment } from "react";

export function TimeLine({ status }: { status: StatusHistory[] }) {
  return (
    <S.TimeLine>
      {status.map((item, index) => (
        <Fragment key={index}>
          <S.WrapperInfoTimeLine>
            <S.CheckBox active>
              <AntDesign name="check" size={16} color="#fff" />
            </S.CheckBox>
            <S.WrapperTextTimeLine>
              <S.TitleTimeLine>{item.title}</S.TitleTimeLine>
              <S.DescriptionTimeLine>{item.description}</S.DescriptionTimeLine>
            </S.WrapperTextTimeLine>
          </S.WrapperInfoTimeLine>
          <S.LineTimeLine />
        </Fragment>
      ))}
    </S.TimeLine>
  );
}
