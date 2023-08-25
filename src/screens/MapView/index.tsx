import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import HeaderAuth from "../../shared/components/HeaderAuth";
import { Tabs } from "./components/Tabs";
import { MapSection } from "./components/MapSection";
import { OrcamentoSection } from "./components/OrcamentoSection";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ServicesCompany } from "../../services/company/types";

export function Map() {
  const navigation = useNavigation<any>();

  const route = useRoute();

  const { services } = route.params as {
    services: ServicesCompany[];
  };

  const [listLocations, setListLocations] =
    useState<ServicesCompany[]>(services);
  const [tabActive, setTabActive] = useState("map");
  const [typeBottomSheet, setTypeBottomSheet] = useState("orcamento");

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <HeaderAuth
        handlePressHeader={() => navigation.goBack()}
        title="Buscar"
      />

      <Tabs active={tabActive} setActive={setTabActive} />

      {tabActive === "map" && (
        <MapSection
          typeBottomSheet={typeBottomSheet}
          listLocations={listLocations}
          setListLocations={setListLocations}
          setTabActive={() => setTabActive("orcamento")}
        />
      )}

      {tabActive === "orcamento" && (
        <OrcamentoSection
          setTabActive={() => setTabActive("map")}
          setTypeBottomSheet={setTypeBottomSheet}
          setListLocations={setListLocations}
        />
      )}
    </SafeAreaView>
  );
}
