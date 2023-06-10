import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { BottomSheetOffice } from "../BottomSheetOffice";
import { FlatList } from "react-native";
import { CardList } from "../CardList";
import MapView, { Marker } from "react-native-maps";
import { MarkerPoint } from "../MarkerPoint";
import SwitchView from "../SwitchView";

import * as Location from "expo-location";

import { Region } from "react-native-maps";
import { Spinner } from "../../../../shared/components/Spinner";

const { height, width } = Dimensions.get("screen");

export const MapSection = ({
  typeBottomSheet,
}: {
  typeBottomSheet: string;
}) => {
  const [viewActive, setViewActive] = useState("map");
  const [visible, setVisible] = useState(false);
  const [mapPermission, setMapPermission] = useState(false);
  const [bottomSheetValue, setBottomSheetValue] = useState({});
  const [loadingMap, setLoadingMap] = useState(true);

  const [coordenantes, setCoordenantes] = useState<
    Location.LocationObjectCoords | null | Region
  >(null);

  const toggleBottomNavigationView = (dataValue: any) => {
    setVisible(!visible);
    setBottomSheetValue(dataValue);
  };

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

  const data = [
    {
      title: "Oficina Lima",
      value: "120,00",
      distance: 15.2,
      isHouse: true,
      id: "22",
      rating: "4,3",
    },
    {
      title: "Oficina Lima 2",
      value: "145,00",
      distance: 12.5,
      isHouse: false,
      id: "23",
      rating: "2,9",
    },
  ];

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
            region={{
              latitude: coordenantes.latitude,
              longitude: coordenantes.longitude,
              latitudeDelta: 0.006,
              longitudeDelta: 0.006,
            }}
            scrollEnabled={false}
          >
            {data.map((item, index) => (
              <Marker
                key={index}
                coordinate={coordenantes}
                onPress={() => toggleBottomNavigationView(item)}
              >
                <MarkerPoint value={item.value} />
              </Marker>
            ))}
          </MapView>
        )
      ) : (
        <View
          style={{
            paddingHorizontal: 20,
            backgroundColor: "rgba(134,197,255,0.1)",
            height: "100%",
            paddingTop: 100,
          }}
        >
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <CardList
                data={item}
                handlePress={() => toggleBottomNavigationView(item)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}

      <BottomSheetOffice
        type={typeBottomSheet}
        visible={visible}
        data={bottomSheetValue}
        setVisible={toggleBottomNavigationView}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
