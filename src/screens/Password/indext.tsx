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

export const Password = ({ navigation }) => {
  const [senha, setSenha] = useState("");

  const valid = useMemo(() => {
    return senha.length > 0 && validPassword(senha);
  }, [senha]);

  const update_password = () => {};

  return (
    <S.Container>
      <Header title="Cadastrar" handlePressHeader={() => navigation.goBack()} />

      <S.Title>Crie uma senha!</S.Title>

      <Input
        label="Senha"
        isPassword={true}
        placeholder="Nova senha"
        value={senha}
        onChangeText={(value) => setSenha(value)}
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

      <Button
        text="Próximo"
        onPress={update_password}
        // disable={!(oitoCaracters && caracterEspecial && maiusculo)}
        disabled={!valid}
      />
    </S.Container>
  );
};
