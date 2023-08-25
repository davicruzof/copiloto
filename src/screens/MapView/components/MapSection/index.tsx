import * as Location from "expo-location";
import React, { useEffect } from "react";
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

export const MapSection = ({
  typeBottomSheet,
  listLocations,
  setListLocations,
  setTabActive,
}: any) => {
  const {
    viewActive,
    setViewActive,
    visible,
    mapPermission,
    setMapPermission,
    bottomSheetValue,
    loadingMap,
    setLoadingMap,
    coordenantes,
    setCoordenantes,
    toggleBottomNavigationView,
  } = MapSectionViewModel();

  useEffect(() => {
    (async () => {
      const permission = await Location.requestForegroundPermissionsAsync();
      if (permission.status === "granted") {
        const { coords } = await Location.getCurrentPositionAsync({});

        setCoordenantes(coords);

        setMapPermission(true);
      } else {
        setViewActive("list");
        setMapPermission(false);
      }
    })();
  }, []);

  if (coordenantes === null) {
    return <View />;
  }

  setTimeout(() => {
    setLoadingMap(false);
  }, 1000);

  if (loadingMap) {
    return (
      <View style={{ width, height: height - 180 }}>
        <Spinner />
      </View>
    );
  }

  return (
    <>
      <SwitchView
        mapPermission={mapPermission}
        active={viewActive}
        setActive={setViewActive}
      />

      {viewActive === "map" && mapPermission ? (
        coordenantes !== null && (
          <MapView
            loadingEnabled
            loadingIndicatorColor="#2C94F4"
            style={{ height: height - 120, width, zIndex: -1 }}
            initialRegion={{
              latitude: listLocations[0].latitude,
              longitude: listLocations[0].longitude,
              latitudeDelta: 0.006,
              longitudeDelta: 0.006,
            }}
            scrollEnabled
          >
            {listLocations.map((item: any, index: any) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
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
            {listLocations.map((item: any) => (
              <CardList
                data={item}
                key={item.id}
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
        setListLocations={setListLocations}
        listLocations={listLocations}
        setTabActive={setTabActive}
      />
    </>
  );
};
