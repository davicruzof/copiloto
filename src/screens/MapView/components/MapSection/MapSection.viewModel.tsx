import { useState } from "react";
import { Region } from "react-native-maps";
import * as Location from "expo-location";

const MapSectionViewModel = () => {
  const [viewActive, setViewActive] = useState("list");
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

  return {
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
  };
};

export default MapSectionViewModel;
