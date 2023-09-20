import { useContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import { useMutation } from "@tanstack/react-query";
import { Alert } from "react-native";
import { getCompanyServices } from "../../services/company/company";
import { Companys, ServicesCompany } from "../../services/company/types";
import { ServicesMapContext } from "../../contexts/servicesMap";
import { useNavigation, useRoute } from "@react-navigation/native";

const MapViewHook = () => {
  const navigation = useNavigation<any>();

  const route = useRoute();

  // const { services } = route.params as {
  //   services: string[];
  // };

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
