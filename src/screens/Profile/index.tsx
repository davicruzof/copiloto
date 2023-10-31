import React, { useContext } from "react";
import {
  ActionPerfil,
  Button,
  Button2,
  Container,
  ContainerActions,
  ContainerAvatar,
  ICon,
  Icone,
  Name,
  TextAction,
  TextEditFoto,
  TextLogout,
} from "./styles";
import { StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import icon3 from "../../assets/arrow2.png";
import { UserContext } from "../../contexts/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const {
    user: { user },
    setUser,
  } = useContext(UserContext);

  const logout = async () => {
    await AsyncStorage.removeItem("@user");
    setUser(null);
  };

  return (
    <Container>
      <StatusBar translucent={true} />
      <ContainerAvatar>
        <ICon>
          <AntDesign name="user" size={50} color="black" />
        </ICon>
        <Name>{user.nome}</Name>
        <Button>
          <TextEditFoto>Trocar a foto</TextEditFoto>
        </Button>
      </ContainerAvatar>
      <ContainerActions>
        <ActionPerfil>
          <TextAction>Meus dados</TextAction>
          <Icone source={icon3} />
        </ActionPerfil>
        <ActionPerfil>
          <TextAction>Dados de revenda</TextAction>
          <Icone source={icon3} />
        </ActionPerfil>
        <ActionPerfil>
          <TextAction>Termos de uso</TextAction>
          <Icone source={icon3} />
        </ActionPerfil>
      </ContainerActions>

      <Button2 onPress={logout}>
        <TextLogout>Sair do aplicativo</TextLogout>
      </Button2>
    </Container>
  );
}
