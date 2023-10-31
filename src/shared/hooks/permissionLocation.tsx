import * as Location from "expo-location";

import { permissionType } from "./types";

const hookPermissionLocation = () => {
  const getPosition = async (): Promise<permissionType> => {
    const { coords } = await Location.getCurrentPositionAsync({});
    return {
      coordenadas: {
        latitude: coords.latitude.toString(),
        longitude: coords.longitude.toString(),
      },
    };
  };

  const requestPermission = async (): Promise<Location.PermissionStatus> => {
    const permission = await Location.requestForegroundPermissionsAsync();
    return permission.status;
  };

  return {
    requestPermission,
    getPosition,
  };
};

export default hookPermissionLocation;
