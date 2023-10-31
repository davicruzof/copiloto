import React, { useEffect } from "react";
import { Keyboard } from "react-native";
import * as S from "./styles";
import TextDanger from "@components/TextDanger";
import Header from "@components/Header";
import ButtonOutLineNext from "@components/ButtonOutLineNext";
import { CodeFieldCustom } from "@components/CodeFieldCustom";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@components/Button";

export const Validation = ({
  title,
  error,
  disable,
  resendCode,
  titleHeader,
  refCodeFiled,
  valueCodeField,
  handleSendCode,
  setValueCodeField,
}: any) => {
  const navigation = useNavigation();
  useEffect(() => {
    if (valueCodeField.length === 4) {
      Keyboard.dismiss();
    }
  }, [valueCodeField]);

  return (
    <S.Container>
      <Header
        title={titleHeader}
        handlePressHeader={() => navigation.goBack()}
      />

      <S.Wrapper>
        <S.Title>{title}</S.Title>

        <CodeFieldCustom
          ref={refCodeFiled}
          value={valueCodeField}
          setValue={setValueCodeField}
        />

        <ButtonOutLineNext
          handlePress={resendCode}
          text="Não recebi o código"
        />

        {error && <TextDanger text={error} />}

        <S.ContainerButton>
          <Button
            text="Próximo"
            type="primary"
            isIcon
            onPress={handleSendCode}
            disable={disable}
            disabled={disable}
          />
        </S.ContainerButton>
      </S.Wrapper>
    </S.Container>
  );
};
