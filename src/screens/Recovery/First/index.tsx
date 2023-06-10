import React, { useState } from "react";
import { Keyboard } from "react-native";
import * as S from "./styles";
import Input from "../../../shared/components/Input/Input";
import TextDanger from "../../../shared/components/TextDanger";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../shared/components/Header";
import { ButtonNext } from "../../../shared/components/ButtonNext";

const RecoveryFirst = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const [error, setError] = useState("");

  const recovery = () => {
    navigation.navigate("RecoveryFinish");
  };

  return (
    <S.Container>
      <Header
        title="Recuperar senha"
        handlePressHeader={() => navigation.goBack()}
      />

      <S.Wrapper onPress={() => Keyboard.dismiss()}>
        <S.Title>
          O código de confirmação será enviado para o endereço de email:
        </S.Title>
        <Input
          label="Email"
          placeholder="Digite o seu email"
          value={email}
          type="email-address"
          onChangeText={(value) => setEmail(value)}
        />

        {error.length > 0 && <TextDanger text={error} />}

        <S.ContainerButton>
          <ButtonNext
            text="Próximo"
            onPress={recovery}
            disable={valid}
            disabled={valid}
          />
        </S.ContainerButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default RecoveryFirst;
