import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "@contexts/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import theme from "@utils/theme";
import * as S from "./styles";

export default function Profile() {
  const {
    user: { user },
    setUser,
  } = useContext(UserContext);

  const logout = async () => {
    await AsyncStorage.removeItem("@user");
    setUser(null);
  };

  const ItemMenu = ({ text }: { text: string }) => {
    return (
      <S.ActionPerfil>
        <S.TextAction>{text}</S.TextAction>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color={theme.colors.primary}
        />
      </S.ActionPerfil>
    );
  };

  return (
    <S.Container>
      <StatusBar translucent={true} />
      <S.ContainerAvatar>
        <S.ICon>
          <AntDesign name="user" size={50} color="black" />
        </S.ICon>
        <S.Name>{user.nome}</S.Name>
        <S.Button>
          <S.TextEditFoto>Trocar a foto</S.TextEditFoto>
        </S.Button>
      </S.ContainerAvatar>
      <S.ContainerActions>
        <ItemMenu text="Meus dados" />
        <ItemMenu text="Termos de uso" />
        <ItemMenu text="Meus dados" />
      </S.ContainerActions>
      <S.Button2 onPress={logout}>
        <S.TextLogout>Sair do aplicativo</S.TextLogout>
      </S.Button2>
    </S.Container>
  );
}
