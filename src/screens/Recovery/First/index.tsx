import React, { useState } from "react";
import { Alert, Keyboard } from "react-native";
import * as S from "./styles";
import Input from "../../../shared/components/Input/Input";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../shared/components/Header";
import { ButtonNext } from "../../../shared/components/ButtonNext";
import { recoveryPassword } from "../../../services/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "../../../shared/components/Spinner";

const RecoveryFirst = () => {
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

  if (isLoadingRecovery) {
    return <Spinner />;
  }

  return (
    <S.Container>
      <Header
        title="Recuperar senha"
        handlePressHeader={() => navigation.goBack()}
      />

      <S.Wrapper onPress={() => Keyboard.dismiss()}>
        <S.Title>
          O código de confirmação será enviado para o endereço de email:
        </S.Title>
        <Input
          label="Email"
          placeholder="Digite o seu email"
          value={email}
          type="email-address"
          onChangeText={(value: React.SetStateAction<string>) =>
            setEmail(value)
          }
        />

        <S.ContainerButton>
          <ButtonNext
            text="Próximo"
            onPress={recovery}
            disable={false}
            disabled={false}
          />
        </S.ContainerButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default RecoveryFirst;
