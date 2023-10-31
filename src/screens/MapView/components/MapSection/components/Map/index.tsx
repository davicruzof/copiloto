import { MarkerPoint } from "@screens/MapView/components/MarkerPoint";
import { ServicesCompany } from "@services/company/types";
import theme from "@utils/theme";
import React from "react";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const { height, width } = Dimensions.get("screen");

const Map: React.FC<{
  coordenantes: {
    latitude: string;
    longitude: string;
  };
  servicesCompany: ServicesCompany[];
  toggleBottomNavigationView: (item: ServicesCompany) => void;
}> = ({ coordenantes, servicesCompany, toggleBottomNavigationView }) => {
  return (
    <MapView
      loadingEnabled
      loadingIndicatorColor={theme.colors.primary}
      style={{ height: height - 120, width }}
      showsUserLocation
      initialRegion={{
        latitude: +coordenantes.latitude,
        longitude: +coordenantes.longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      }}
      scrollEnabled
    >
      {servicesCompany.map((item, index) => (
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
  );
};

export default Map;
