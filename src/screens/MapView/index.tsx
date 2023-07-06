import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import HeaderAuth from "../../shared/components/HeaderAuth";
import { Tabs } from "./components/Tabs";
import { MapSection } from "./components/MapSection";
import { OrcamentoSection } from "./components/OrcamentoSection";
import { useNavigation } from "@react-navigation/native";
import { data } from "./util";

export function Map() {
  const navigation = useNavigation<any>();

  const [listLocations, setListLocations] = useState(data);
  const [tabActive, setTabActive] = useState("map");
  const [typeBottomSheet, setTypeBottomSheet] = useState("orcamento");

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <HeaderAuth
        handlePressHeader={() => navigation.navigate("home")}
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
