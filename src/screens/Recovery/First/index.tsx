import React from "react";
import { Keyboard } from "react-native";
import Input from "@components/Input/Input";
import Header from "@components/Header";
import { Spinner } from "@components/Spinner";
import * as S from "./styles";
import RecoveryFirstViewModel from "./RecoveryFirstViewModel";
import { Button } from "@components/Button";

const RecoveryFirst = () => {
   const {
    navigation,
    email,
    setEmail,
    isLoadingRecovery,
    recovery,
  } = RecoveryFirstViewModel();

  if (isLoadingRecovery) {
    return <Spinner />;
  }

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
          onChangeText={(value: React.SetStateAction<string>) =>
            setEmail(value)
          }
        />

        <S.ContainerButton>
          <Button
            text="Próximo"
            type="primary"
            isIcon
            onPress={recovery}
          />
        </S.ContainerButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default RecoveryFirst;
