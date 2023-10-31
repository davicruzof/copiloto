import React from "react";

import RadioButton from "@components/RadioButton";
import * as S from "./styles";

export const SexoSelect: React.FC<{
  sexo: string;
  setSexo: (sexo: string) => void;
}> = ({ sexo, setSexo }) => {
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
