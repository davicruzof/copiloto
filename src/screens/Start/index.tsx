import React from "react";
import { Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import bg from "@assets/bg.png";
import logo from "@assets/logo.png";
import * as S from "./styles";
import { Button } from "@components/Button";

function Start() {
  const navigation = useNavigation<any>();

  const handleScreen = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <S.Container>
      <StatusBar translucent backgroundColor="transparent" />
      <S.Fundo source={bg} />
      <S.Wrapper>
        <Image source={logo} />
        <S.Slogan>Tudo que seu veículo precisa está aqui!</S.Slogan>
        <S.ContainerButtons>
          <Button type="primary" text="Entrar" onPress={() => handleScreen("SignIn")} />
          <Button
            text="Cadastrar"
            type="secondary"
            onPress={() => handleScreen("Register")}
          />
        </S.ContainerButtons>
      </S.Wrapper>
    </S.Container>
  );
}
export default Start;
