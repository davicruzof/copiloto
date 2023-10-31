import * as Location from "expo-location";
import { useMutation } from "@tanstack/react-query";
import { ServicesMapContext } from "../../contexts/servicesMap";
import { useContext, useEffect, useState } from "react";
import { getCompanyServices } from "../../services/company/company";
import { Companys, ServicesCompany } from "../../services/company/types";
import { useNavigation } from "@react-navigation/native";
import { permissionType } from "./types";
import { Alert } from "react-native";

const hookPermissionLocation = () => {
  const { setServicesMap } = useContext(ServicesMapContext);
  const navigation = useNavigation<any>();
  const [companys, setCompanys] = useState<ServicesCompany[]>([]);

  const {
    mutate: mutateGetServicesCompany,
    isLoading: mutateGetCompanyLoading,
  } = useMutation({
    mutationFn: (servicesIds: Companys) => getCompanyServices(servicesIds),
    onSuccess: (data: ServicesCompany[]) => {
      if (data.length > 0) {
        setCompanys(data);
        navigation.navigate("MapView");
      } else {
        Alert.alert(
          "Copiloto",
          "Nenhum dado foi encontrado na api para listar oficinas"
        );
      }
    },
  });

  useEffect(() => {
    companys.length > 0 && setServicesMap(companys);
  }, [companys]);

  const requestPermission = async (): Promise<permissionType | null> => {
    const permission = await Location.requestForegroundPermissionsAsync();
    if (permission.status === "granted") {
      const { coords } = await Location.getCurrentPositionAsync({});
      return {
        coordenadas: {
          latitude: coords.latitude.toString(),
          longitude: coords.longitude.toString(),
        },
      };
    }
    return null;
  };
  return {
    mutateGetCompanyLoading,
    requestPermission,
    mutateGetServicesCompany,
  };
};

export default hookPermissionLocation;
