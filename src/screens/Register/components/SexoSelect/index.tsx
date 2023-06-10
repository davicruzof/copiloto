import React from "react";

import * as S from "./styles";
import RadioButton from "../../../../shared/components/RadioButton";

export const SexoSelect = ({ sexo, setSexo }) => {
  return (
    <S.Container>
      <S.Label>Genêro</S.Label>

      <RadioButton
        handleSelect={() => setSexo("Masculino")}
        text="Masculino"
        selected={sexo === "Masculino"}
      />
      <RadioButton
        handleSelect={() => setSexo("Feminino")}
        text="Feminino"
        selected={sexo === "Feminino"}
      />
      <RadioButton
        handleSelect={() => setSexo("Nullo")}
        text="Não informar"
        selected={sexo === "Nullo"}
      />
    </S.Container>
  );
};
