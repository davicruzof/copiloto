import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";

import HeaderAuth from "../../shared/components/HeaderAuth";
import { Tabs } from "./components/Tabs";
import { MapSection } from "./components/MapSection";
import { OrcamentoSection } from "./components/OrcamentoSection";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Spinner } from "../../shared/components/Spinner";

export function Map() {
  const navigation = useNavigation<any>();
  const { params } = useRoute() as {
    params?: { section: string; typeBottomSheet: string };
  };

  const typeBottomSheet = params?.typeBottomSheet
    ? params?.typeBottomSheet
    : "empty";

  const tabActively = params?.section ? params.section : "map";

  const [tabActive, setTabActive] = useState("map");

  useEffect(() => {
    setTabActive(tabActively);
  }, [tabActively]);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <HeaderAuth
        handlePressHeader={() => navigation.navigate("home")}
        title="Buscar"
      />

      <Tabs active={tabActive} setActive={setTabActive} />

      {tabActive === "map" && <MapSection typeBottomSheet={typeBottomSheet} />}

      {tabActive === "orcamento" && <OrcamentoSection />}
    </SafeAreaView>
  );
}
