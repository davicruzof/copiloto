import { useNavigation, useRoute } from "@react-navigation/native";
import { createPassword } from "@services/auth/auth";
import { passwordCreate } from "@services/auth/types";
import { useMutation } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Alert } from "react-native";
import { validPassword } from "./util";

const PasswordViewModel = () => {
  const navigation = useNavigation<any>();

  const { params } = useRoute<any>();
  const idUser = params.idUser;

  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");

  const { mutate: mutateCreatePassword, isLoading: isLoadingPassword } =
    useMutation({
      mutationFn: (formData: passwordCreate) => createPassword(formData),
      onSuccess: (data) => {
        Alert.alert("Copiloto", data.message);
        if (data.success) {
          navigation.navigate("Start");
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
    return validPassword(senha) && validPassword(senha2);
  }, [senha, senha2]);

  const update_password = () => {
    if (senha !== senha2) {
      Alert.alert("Copiloto", "As senhas não conferem");
      return;
    }

    if (valid) {
      mutateCreatePassword({ senha, idUser });
    }
  };

  return {
    navigation,
    senha,
    setSenha,
    senha2,
    setSenha2,
    valid,
    update_password,
    isLoadingPassword,
  };
};

export default PasswordViewModel;
