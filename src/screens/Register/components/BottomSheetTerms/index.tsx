import React from "react";
import { ScrollView, Text } from "react-native";

import { ButtonLigthDanger } from "@components/ButtonLigthDanger";
import { BottomSheet } from "react-native-btr";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import * as S from "./styles";

const BottomSheetCustom: React.FC<{
  visible: boolean;
  setVisible: () => void;
  terms: string;
}> = ({ visible, setVisible, terms }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <BottomSheet visible={visible} onBackButtonPress={setVisible}>
      <S.Container bottom={bottom}>
        <ScrollView>
          <S.WrapperTerms>
            <Text>{terms}</Text>
          </S.WrapperTerms>
        </ScrollView>

        <ButtonLigthDanger text="fechar" onPress={setVisible} />
      </S.Container>
    </BottomSheet>
  );
};

export default BottomSheetCustom;
