import React from "react";
import { View } from "react-native";
import Input from "@components/Input/Input";
import Header from "@components/Header";
import { Spinner } from "@components/Spinner";
import { ButtonNext } from "@components/ButtonNext";
import PasswordViewModel from "./PasswordViewModel";
import { isCharSpecial, isEightChars, isUpperCase } from "./util";
import * as S from "./styles";

export const Password = () => {
  const {
    navigation,
    senha,
    setSenha,
    senha2,
    setSenha2,
    valid,
    update_password,
    isLoadingPassword,
  } = PasswordViewModel();

  if (isLoadingPassword) {
    return <Spinner />;
  }

  return (
    <S.Container>
      <Header title="Cadastrar" handlePressHeader={() => navigation.goBack()} />

      <S.Wrapper>
        <View>
          <S.Title>Crie uma senha!</S.Title>

          <Input
            label="Senha"
            isPassword={true}
            placeholder="Nova senha"
            value={senha}
            onChangeText={(value: React.SetStateAction<string>) =>
              setSenha(value)
            }
          />

          <Input
            label="Repetir Senha"
            isPassword={true}
            placeholder="Repetir nova senha"
            value={senha2}
            onChangeText={(value: React.SetStateAction<string>) =>
              setSenha2(value)
            }
          />

          <S.ContainerInfos>
            <S.TitleInfo>Requisitos</S.TitleInfo>
            <S.TextInfo active={isEightChars(senha)}>
              Mínimo 8 caracteres
            </S.TextInfo>
            <S.TextInfo active={isCharSpecial(senha)}>
              1 caracter especial
            </S.TextInfo>
            <S.TextInfo active={isUpperCase(senha)}>
              1 caracter maiúsculo
            </S.TextInfo>
          </S.ContainerInfos>
        </View>

        <S.ContainerButton>
          <ButtonNext
            text="Próximo"
            onPress={update_password}
            disable={!valid}
            disabled={!valid}
          />
        </S.ContainerButton>
      </S.Wrapper>
    </S.Container>
  );
};
