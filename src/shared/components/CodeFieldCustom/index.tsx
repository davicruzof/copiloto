import React from "react";
import {
  Cursor,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import * as S from "./styles";

export const CodeFieldCustom = ({ ref, value, setValue }) => {
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <S.Container
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={4}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <S.TextCustom
          focus={isFocused}
          key={index}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </S.TextCustom>
      )}
    />
  );
};
