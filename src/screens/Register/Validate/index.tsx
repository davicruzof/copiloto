import React from "react";

import { Validation } from "@components/Validation";
import { Spinner } from "@components/Spinner";
import ValidateViewModel from "./ValidateViewModel";

export const Validate = () => {
  const {
    isLoadingValidate,
    isLoadingResend,
    error,
    valid,
    resendEmail,
    sendToken,
    value,
    setValue,
  } = ValidateViewModel();

  if (isLoadingValidate || isLoadingResend) {
    return <Spinner />;
  }

  return (
    <Validation
      title="Digite o código que você recebeu"
      error={error}
      disable={valid}
      resendCode={resendEmail}
      titleHeader="Cadastrar"
      valueCodeField={value}
      handleSendCode={sendToken}
      setValueCodeField={setValue}
    />
  );
};
