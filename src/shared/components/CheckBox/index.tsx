import React from "react";
import * as S from "./style";
import icon from "../../../assets/check.png";
import { Image } from "react-native";

const CheckBox = ({ selected, handleSelect }) => {
  return (
    <S.Container onPress={handleSelect}>
      <S.ContainerRadius selected={selected}>
        {selected && <Image source={icon} />}
      </S.ContainerRadius>
    </S.Container>
  );
};

export default CheckBox;
