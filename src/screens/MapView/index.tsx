import React, { Suspense } from "react";
import { SafeAreaView } from "react-native";

import HeaderAuth from "../../shared/components/HeaderAuth";
import { Tabs } from "./components/Tabs";
import { MapSection } from "./components/MapSection";
import { OrcamentoSection } from "./components/OrcamentoSection";
import { Spinner } from "../../shared/components/Spinner";
import MapViewHook from "./MapHook";

export function Map() {
  const {
    navigation,
    tabActive,
    setTabActive,
    typeBottomSheet,
    setTypeBottomSheet,
  } = MapViewHook();

  return (
    <Suspense fallback={<Spinner />}>
      <SafeAreaView style={{ backgroundColor: "#fff" }}>
        <HeaderAuth
          handlePressHeader={() => navigation.goBack()}
          title="Buscar"
        />

        <Tabs active={tabActive} setActive={setTabActive} />

        {tabActive === "map" && (
          <MapSection
            typeBottomSheet={typeBottomSheet}
            setTabActive={() => setTabActive("orcamento")}
          />
        )}

        {tabActive === "orcamento" && (
          <OrcamentoSection
            setTabActive={() => setTabActive("map")}
            setTypeBottomSheet={setTypeBottomSheet}
          />
        )}
      </SafeAreaView>
    </Suspense>
  );
}
