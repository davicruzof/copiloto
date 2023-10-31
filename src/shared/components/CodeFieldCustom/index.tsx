import React from "react";
import {
  Cursor,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import * as S from "./styles";

export const CodeFieldCustom = ({ ref, value, setValue }: {
  ref: React.MutableRefObject<any>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
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
      renderCell={({ index, symbol, isFocused }: {
        index: number;
        symbol: string;
        isFocused: boolean;
      }) => (
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
