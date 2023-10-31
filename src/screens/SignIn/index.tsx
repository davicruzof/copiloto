import React from "react";
import Header from "@components/Header";
import Input from "@components/Input/Input";
import { Spinner } from "@components/Spinner";
import TextDanger from "@components/TextDanger";
import ButtonOutLineNext from "@components/ButtonOutLineNext";
import SignInModelView from "./SignInModelView";
import * as S from "./styles";
import { Button } from "@components/Button";

const SignIn = () => {
  const {
    isLoading,
    navigation,
    handleSignIn,
    error,
    email,
    setEmail,
    password,
    setPassword,
  } = SignInModelView();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <S.Container>
      <Header
        handlePressHeader={() => navigation.navigate("Start")}
        title="Entrar"
      />

      <S.Wrapper>
        <Input
          label="Email"
          placeholder="Digite o seu email"
          value={email}
          type="email-address"
          onChangeText={(value: React.SetStateAction<string>) =>
            setEmail(value)
          }
        />

        <Input
          label="Senha"
          placeholder="Digite a sua senha"
          value={password}
          isPassword={true}
          onChangeText={(value: React.SetStateAction<string>) =>
            setPassword(value)
          }
        />

        <ButtonOutLineNext
          handlePress={() => navigation.navigate("Recovery")}
          text="Esqueci minha senha"
        />

        {error && <TextDanger text="Email ou senha invalido" />}

        <S.ContainerButton testID="entrar">
          <Button isIcon type="primary" text="Entrar" onPress={handleSignIn} />
        </S.ContainerButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default SignIn;
