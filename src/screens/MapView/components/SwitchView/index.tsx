import React from "react";

import * as S from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Pressable } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const SwitchView = ({ active, setActive, mapPermission }: any) => {
  const { top } = useSafeAreaInsets();
  return (
    <S.Container top={top}>
      <Pressable
        disabled={!mapPermission}
        onPress={() => setActive("map")}
        style={{ marginRight: 30 }}
      >
        <MaterialCommunityIcons
          name="map-marker-multiple"
          size={24}
          color={active === "map" ? "#2c94f4" : "#AEBECC"}
        />
      </Pressable>
      <Pressable onPress={() => setActive("list")}>
        <Entypo
          name="list"
          size={24}
          color={active === "list" ? "#2c94f4" : "#AEBECC"}
        />
      </Pressable>
    </S.Container>
  );
};

export default SwitchView;
