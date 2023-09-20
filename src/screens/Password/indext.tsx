import React, { useMemo, useState } from "react";
import Input from "../../shared/components/Input/Input";
import * as S from "./styles";
import Header from "../../shared/components/Header";
import { Button } from "../../shared/components/Button";
import {
  isCharSpecial,
  isEightChars,
  isUpperCase,
  validPassword,
} from "./util";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { createPassword } from "../../services/auth/auth";
import { passwordCreate } from "../../services/auth/types";
import { Spinner } from "../../shared/components/Spinner";

export const Password = () => {
  const navigation = useNavigation<any>();

  const { params } = useRoute<any>();
  const idUser = params.idUser;

  const [senha, setSenha] = useState("");

  const { mutate: mutateCreatePassword, isLoading: isLoadingPassword } =
    useMutation({
      mutationFn: (formData: passwordCreate) => createPassword(formData),
      onSuccess: (data) => {
        Alert.alert("Copiloto", data.message);
        if (data.success) {
          navigation.navigate("SignIn");
        }
      },
      onError: () => {
        Alert.alert(
          "Copiloto",
          "Desculpe, estamos com problemas. Tente novamente mais tarde."
        );
      },
    });

  const valid = useMemo(() => {
    return senha.length > 0 && validPassword(senha);
  }, [senha]);

  const update_password = () => {
    if (valid) {
      mutateCreatePassword({ senha, idUser });
    }
  };

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

        <Button
          text="Próximo"
          onPress={update_password}
          disable={!valid}
          disabled={!valid}
        />
      </S.Wrapper>
    </S.Container>
  );
};
