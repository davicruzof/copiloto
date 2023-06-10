import React, { useState } from "react";
import { useBlurOnFulfill } from "react-native-confirmation-code-field";

import { useNavigation } from "@react-navigation/native";
import { Validation } from "../../../shared/components/Validation";

export const Validate = () => {
  const navigation = useNavigation<any>();
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: 4 });

  const [error, setError] = useState("");

  const sendToken = () => {
    navigation.navigate("RegisterVehicle");
  };

  const resendEmail = () => {};

  return (
    <Validation
      title="Digite o código que você recebeu"
      error={error}
      disable={valid}
      resendCode={resendEmail}
      titleHeader="Cadastrar"
      refCodeFiled={ref}
      valueCodeField={value}
      handleSendCode={sendToken}
      setValueCodeField={setValue}
    />
  );
};
