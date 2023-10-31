import { useNavigation, useRoute } from "@react-navigation/native";
import { resendToken, validateToken } from "@services/auth/auth";
import { tokenValidate } from "@services/auth/types";
import { useMutation } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Alert } from "react-native";

const RecoveryFinishViewModel = () => {
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

  const resendEmail = () => {
    mutateResendToken(idUser);
  };

  const sendToken = () => {
    mutateValidateToken({ idUser, token: value });
  };
    
    return {
        isLoadingValidate,
        isLoadingResend,
        value,
        setValue,
        error,
        valid,
        resendEmail,
        sendToken,
    };
};

export default RecoveryFinishViewModel;
