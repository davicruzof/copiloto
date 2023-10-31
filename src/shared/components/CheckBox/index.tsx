import React from "react";
import * as S from "./style";
import { MaterialIcons } from "@expo/vector-icons";

const CheckBox = ({ selected, handleSelect }) => {
  return (
    <S.Container onPress={handleSelect}>
      <S.ContainerRadius selected={selected}>
        {selected && <MaterialIcons name="check" size={18} color="#fff" />}
      </S.ContainerRadius>
    </S.Container>
  );
};

export default CheckBox;
