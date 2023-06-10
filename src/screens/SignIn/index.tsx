import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { useMutation } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../../shared/components/Button";
import Header from "../../shared/components/Header";
import Input from "../../shared/components/Input/Input";
import { Spinner } from "../../shared/components/Spinner";
import { signIn } from "../../services/auth/auth";
import { UserLogin } from "../../services/types";
import TextDanger from "../../shared/components/TextDanger";
import ButtonOutLineNext from "../../shared/components/ButtonOutLineNext";
import { UserContext } from "../../contexts/userContext";
import * as S from "./styles";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);

  const { mutate: MutateSignIn, isLoading } = useMutation({
    mutationFn: (formData: UserLogin) => signIn(formData),
    onSuccess: async (data) => {
      if (data.success) {
        await AsyncStorage.setItem("@user", JSON.stringify(data.user));
        setUser({ user: data.user, auth: true });
      } else {
        setError(true);
      }
    },
    onError: () => {
      Alert.alert(
        "Copiloto",
        "Desculpe, estamos com problemas. Tente novamente mais tarde."
      );
    },
  });

  const handleSignIn = () => {
    const userData: UserLogin = {
      email: email,
      senha: password,
    };

    MutateSignIn(userData);
  };

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

        <S.ContainerButton>
          <Button text="Entrar" onPress={handleSignIn} />
        </S.ContainerButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default SignIn;
