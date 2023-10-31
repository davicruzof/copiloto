import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import * as S from "./styles";
import theme from "@utils/theme";

const ButtonOutLineNext: React.FC<{
  text: string;
  handlePress: () => void;
}> = ({ text, handlePress }) => {
  return (
    <S.ButtonRecovery onPress={handlePress}>
      <S.RecoveryText>{text}</S.RecoveryText>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={20}
        color={theme.colors.primary}
      />
    </S.ButtonRecovery>
  );
};

export default ButtonOutLineNext;
