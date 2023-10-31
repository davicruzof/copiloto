import React from "react";

import HeaderAuth from "@components/HeaderAuth";
import { Tabs } from "./components/Tabs";
import { MapSection } from "./components/MapSection";
import { OrcamentoSection } from "./components/OrcamentoSection";
import MapViewHook from "./MapHook";
import { Container } from "./styles";

export function Map() {
  const {
    navigation,
    tabActive,
    setTabActive,
    typeBottomSheet,
    setTypeBottomSheet,
  } = MapViewHook();

  return (
    <Container>
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
    </Container>
  );
}
