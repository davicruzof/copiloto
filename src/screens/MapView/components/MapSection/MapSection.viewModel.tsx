import { Alert } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { OrcamentoContext } from "@contexts/orcamento";
import { useContext, useEffect, useState } from "react";
import { getCompanyServices } from "@services/company/company";
import hookPermissionLocation from "@hooks/permissionLocation";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { Companys, ServicesCompany } from "@services/company/types";
import { ServicesSelectedContext } from "@contexts/servicesSelected";
import { ServicesRecommendationSelectedContext } from "@contexts/servicesRecommendationSelected";

const MapSectionViewModel = () => {
  const isFocused = useIsFocused();
  const route = useRoute();
  const params = route.params as {
    cep?: string;
  };
  const { orcamento } = useContext(OrcamentoContext);
  const { servicesRecommendationSelected } = useContext(
    ServicesRecommendationSelectedContext
  );
  const { servicesSelected } = useContext(ServicesSelectedContext);
  const { getPosition } = hookPermissionLocation();
  const [coordinates, setCoordinates] = useState<{
    latitude: string;
    longitude: string;
  }>({} as { latitude: string; longitude: string });

  const [servicesCompany, setServicesCompany] = useState<ServicesCompany[]>([]);

  const [viewActive, setViewActive] = useState("list");
  const [visible, setVisible] = useState(false);
  const [bottomSheetValue, setBottomSheetValue] = useState({});

  const {
    mutate: mutateGetServicesCompany,
    isLoading: mutateGetCompanyLoading,
  } = useMutation({
    mutationFn: (servicesIds: Companys) => getCompanyServices(servicesIds),
    onSuccess: (data: ServicesCompany[]) => {
      if (data.length > 0) {
        setServicesCompany(data);
      } else {
        Alert.alert(
          "Copiloto",
          "Nenhum dado foi encontrado na api para listar oficinas"
        );
      }
    },
  });

  const toggleBottomNavigationView = (dataValue: any) => {
    setVisible(!visible);
    setBottomSheetValue(dataValue);
  };

  useEffect(() => {
    let paramsRequest: Companys = {
      services: [...servicesSelected, ...servicesRecommendationSelected],
    };

    if (params?.cep) {
      paramsRequest = {
        ...paramsRequest,
        cep: params.cep,
      };
    } else {
      const permission = async () => {
        const position = await getPosition();
        if (position.coordenadas) {
          setCoordinates(position.coordenadas);
          paramsRequest = {
            ...paramsRequest,
            coordenadas: position.coordenadas,
          };
        }
      };
      permission();
    }

    mutateGetServicesCompany(paramsRequest);
  }, [isFocused]);

  return {
    visible,
    orcamento,
    viewActive,
    coordinates,
    setViewActive,
    servicesCompany,
    bottomSheetValue,
    mutateGetCompanyLoading,
    toggleBottomNavigationView,
  };
};

export default MapSectionViewModel;
