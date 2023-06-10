import React, { useState } from "react";
import { useBlurOnFulfill } from "react-native-confirmation-code-field";
import { Validation } from "../../../shared/components/Validation";

const RecoveryFinish = ({ navigation }) => {
  const [valid, setValid] = useState(true);
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: 4 });

  const [error, setError] = useState("");

  const resendEmail = () => {};
  const sendToken = () => {};

  return (
    <Validation
      title="Digite o código que você recebeu"
      error={error}
      disable={valid}
      resendCode={resendEmail}
      titleHeader="Recuperar senha"
      refCodeFiled={ref}
      valueCodeField={value}
      handleSendCode={sendToken}
      setValueCodeField={setValue}
    />
  );
};

export default RecoveryFinish;
