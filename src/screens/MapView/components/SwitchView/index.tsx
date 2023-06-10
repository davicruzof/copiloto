import React from "react";

import * as S from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const SwitchView = ({ active, setActive, mapPermission }: any) => {
  const { top } = useSafeAreaInsets();
  return (
    <S.Container top={top}>
      <TouchableOpacity
        disabled={!mapPermission}
        onPress={() => setActive("map")}
        style={{ marginRight: 30 }}
      >
        <MaterialCommunityIcons
          name="map-marker-multiple"
          size={24}
          color={active === "map" ? "#2c94f4" : "#AEBECC"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive("list")}>
        <Entypo
          name="list"
          size={24}
          color={active === "list" ? "#2c94f4" : "#AEBECC"}
        />
      </TouchableOpacity>
    </S.Container>
  );
};

export default SwitchView;
