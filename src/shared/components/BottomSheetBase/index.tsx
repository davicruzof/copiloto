import React from "react";

import * as S from "./styles";

import { BottomSheet as BottomSheetComponent } from "react-native-btr";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const BottomSheetBase = ({ visible, setVisible, children }: any) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <BottomSheetComponent visible={visible} onBackButtonPress={setVisible}>
      <S.Container bottom={bottom}>{children}</S.Container>
    </BottomSheetComponent>
  );
};
