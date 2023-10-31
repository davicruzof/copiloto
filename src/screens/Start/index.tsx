import React from "react";
import { Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import bg from "@assets/bg.png";
import logo from "@assets/logo.png";
import { Button } from "@components/Button";
import { ButtonLigth } from "@components/ButtonLigth";
import * as S from "./styles";

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
          <Button text="Entrar" onPress={() => handleScreen("SignIn")} />
          <ButtonLigth
            text="Cadastrar"
            onPress={() => handleScreen("Register")}
          />
        </S.ContainerButtons>
      </S.Wrapper>
    </S.Container>
  );
}
export default Start;
