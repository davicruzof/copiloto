import React from "react";

import { ButtonLigthDanger } from "../../../shared/components/ButtonLigthDanger";
import { BottomSheetBase } from "../../../shared/components/BottomSheetBase";
import AgendaItem from "./AgendaItem";
import * as S from "./styles";

export const BottomSheet = ({ visible, setVisible, data }: any) => {
  return (
    <BottomSheetBase visible={visible} onBackButtonPress={setVisible}>
      <S.Header>
        <AgendaItem data={data} setVisible={setVisible} />
      </S.Header>
      <ButtonLigthDanger text="fechar" onPress={setVisible} />
    </BottomSheetBase>
  );
};
