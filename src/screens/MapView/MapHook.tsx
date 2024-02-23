import {  useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import hookPermissionLocation from "@hooks/permissionLocation";

const MapViewHook = () => {
  const navigation = useNavigation<any>();

  const route = useRoute();

  const params = route.params as any;

  const [tabActive, setTabActive] = useState("map");
  const [typeBottomSheet, setTypeBottomSheet] = useState("orcamento");

  const { requestPermission } = hookPermissionLocation();

  useEffect(() => {

    if (params?.cep) {
      setTabActive("list");
    } else {
      const permission = async () => {
        const permission = await requestPermission();
        if (permission === "granted") {
          setTabActive("map");
        }
      };
      permission();
    }

  }
  , []);



  return {
    navigation,
    tabActive,
    setTabActive,
    typeBottomSheet,
    setTypeBottomSheet,
  };
};

export default MapViewHook;
