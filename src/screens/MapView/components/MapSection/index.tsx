import React, { Suspense, useContext } from "react";
import { Dimensions, View } from "react-native";

import { BottomSheetOffice } from "../BottomSheetOffice";
import { CardList } from "../CardList";
import MapView, { Marker } from "react-native-maps";
import { MarkerPoint } from "../MarkerPoint";
import SwitchView from "../SwitchView";

import { Spinner } from "../../../../shared/components/Spinner";
import * as S from "./styles";
import MapSectionViewModel from "./MapSection.viewModel";

const { height, width } = Dimensions.get("screen");

export const MapSection = ({ typeBottomSheet, setTabActive }: any) => {
  const {
    visible,
    viewActive,
    coordenantes,
    setViewActive,
    mapPermission,
    servicesCompany,
    bottomSheetValue,
    toggleBottomNavigationView,
  } = MapSectionViewModel();

  return (
    <Suspense fallback={<Spinner />}>
      <SwitchView
        mapPermission={mapPermission}
        active={viewActive}
        setActive={setViewActive}
      />

      {viewActive === "map" && mapPermission ? (
        coordenantes !== null &&
        servicesCompany.length > 0 && (
          <MapView
            loadingEnabled
            loadingIndicatorColor="#2C94F4"
            style={{ height: height - 120, width }}
            initialRegion={{
              latitude: +coordenantes.latitude,
              longitude: +coordenantes.longitude,
              latitudeDelta: 0.006,
              longitudeDelta: 0.006,
            }}
            scrollEnabled
          >
            {servicesCompany.map((item: any, index: any) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: parseFloat(item.latitude),
                  longitude: parseFloat(item.longitude),
                }}
                onPress={() => toggleBottomNavigationView(item)}
              >
                <MarkerPoint value={item.value} />
              </Marker>
            ))}
          </MapView>
        )
      ) : (
        <S.Container>
          <S.List showsVerticalScrollIndicator={false}>
            {servicesCompany.map((item: any) => (
              <CardList
                data={item}
                key={item.id_company}
                handlePress={() => toggleBottomNavigationView(item)}
              />
            ))}
          </S.List>
        </S.Container>
      )}

      <BottomSheetOffice
        type={typeBottomSheet}
        visible={visible}
        data={bottomSheetValue}
        setVisible={toggleBottomNavigationView}
        setTabActive={setTabActive}
      />
    </Suspense>
  );
};
