import React, { useState } from "react";
import { View } from "react-native";

import * as S from "./styles";
import theme from "../../../shared/utils/theme";

export default function Input({
  placeholder,
  isPassword = false,
  label,
  type = "default",
  ...props
}) {
  const [color, setColor] = useState(theme.colors.disabled);

  return (
    <View style={{width: '100%'}}>
      <S.Label>{label}</S.Label>
      <S.InputText
        placeholder={placeholder}
        keyboardType={type}
        secureTextEntry={isPassword}
        autoCapitalize="none"
        focus={color}
        onFocus={() => setColor(theme.colors.primary)}
        {...props}
      />
    </View>
  );
}
