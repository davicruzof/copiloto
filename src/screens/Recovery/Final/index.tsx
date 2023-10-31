import React from "react";
import { Validation } from "@components/Validation";
import { Spinner } from "@components/Spinner";
import RecoveryFinishViewModel from "./RecoveryFinishModelView";

const RecoveryFinish = () => {
  const {
    isLoadingValidate,
    isLoadingResend,
    value,
    setValue,
    error,
    valid,
    resendEmail,
    sendToken,
  } = RecoveryFinishViewModel();

  if (isLoadingValidate || isLoadingResend) {
    return <Spinner />;
  }

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
