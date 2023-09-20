import React, { useMemo, useState } from "react";
import { Validation } from "../../../shared/components/Validation";
import { resendToken, validateToken } from "../../../services/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { Alert } from "react-native";
import { tokenValidate } from "../../../services/auth/types";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Spinner } from "../../../shared/components/Spinner";

const RecoveryFinish = () => {
  const navigation = useNavigation<any>();
  const { params } = useRoute<any>();
  const idUser = params.idUser;

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const { mutate: mutateValidateToken, isLoading: isLoadingValidate } =
    useMutation({
      mutationFn: (formData: tokenValidate) => validateToken(formData),
      onSuccess: (data) => {
        if (data.success) {
          navigation.navigate("CreatePassword", { idUser });
        } else {
          setError(data.error);
        }
      },
      onError: () => {
        Alert.alert(
          "Copiloto",
          "Desculpe, estamos com problemas. Tente novamente mais tarde."
        );
      },
    });

  const { mutate: mutateResendToken, isLoading: isLoadingResend } = useMutation(
    {
      mutationFn: (formData: string) => resendToken(formData),
      onSuccess: (data) => {
        Alert.alert("Copiloto", data.message);
      },
      onError: () => {
        Alert.alert(
          "Copiloto",
          "Desculpe, estamos com problemas. Tente novamente mais tarde."
        );
      },
    }
  );

  const valid = useMemo(() => {
    return value.length < 4;
  }, [value]);

  if (isLoadingValidate || isLoadingResend) {
    return <Spinner />;
  }

  const resendEmail = () => {
    mutateResendToken(idUser);
  };

  const sendToken = () => {
    mutateValidateToken({ idUser, token: value });
  };

  return (
    <Validation
      title="Digite o código que você recebeu"
      error={error}
      disable={valid}
      resendCode={resendEmail}
      titleHeader="Recuperar senha"
      valueCodeField={value}
      handleSendCode={sendToken}
      setValueCodeField={setValue}
    />
  );
};

export default RecoveryFinish;
