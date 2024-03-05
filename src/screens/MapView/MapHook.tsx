import {  useState } from "react";
import { useNavigation } from "@react-navigation/native";

const MapViewHook = () => {
  const navigation = useNavigation<any>();

  const [tabActive, setTabActive] = useState("map");
  const [typeBottomSheet, setTypeBottomSheet] = useState("orcamento");

  return {
    navigation,
    tabActive,
    setTabActive,
    typeBottomSheet,
    setTypeBottomSheet,
  };
};

export default MapViewHook;
