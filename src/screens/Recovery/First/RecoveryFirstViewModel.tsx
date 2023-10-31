import { useNavigation } from "@react-navigation/native";
import { recoveryPassword } from "@services/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Alert } from "react-native";

const RecoveryFirstViewModel = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");

  const { mutate: mutateRecoveryPassword, isLoading: isLoadingRecovery } =
    useMutation({
      mutationFn: (formData: string) => recoveryPassword(formData),
      onSuccess: (data) => {
        Alert.alert("Copiloto", data.message);
        if (data.success) {
          navigation.navigate("RecoveryFinish", { idUser: data.idUser });
        }
      },
      onError: () => {
        Alert.alert(
          "Copiloto",
          "Desculpe, estamos com problemas. Tente novamente mais tarde."
        );
      },
    });

  const recovery = () => {
    mutateRecoveryPassword(email);
  };
    
  return {
    navigation,
    email,
    setEmail,
    isLoadingRecovery,
    recovery,
  };
};

export default RecoveryFirstViewModel;
