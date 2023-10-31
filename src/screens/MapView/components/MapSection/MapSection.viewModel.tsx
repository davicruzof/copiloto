import { useContext, useEffect, useState } from "react";
import { ServicesMapContext } from "@contexts/servicesMap";
import { OrcamentoContext } from "@contexts/orcamento";
import { ServicesCompany } from "@services/company/types";
import { useRoute } from "@react-navigation/native";

const MapSectionViewModel = () => {
  const route = useRoute();
  const params = route.params as {
    coordinates?: {
      latitude: string;
      longitude: string;
    };
    cep?: string;
  };
  
  const { orcamento } = useContext(OrcamentoContext);
  const { servicesMap } = useContext(ServicesMapContext);
  const [viewActive, setViewActive] = useState("list");
  const [visible, setVisible] = useState(false);
  const [bottomSheetValue, setBottomSheetValue] = useState({});
  const [servicesCompany, setServicesCompany] =
    useState<ServicesCompany[]>(servicesMap);

  const toggleBottomNavigationView = (dataValue: any) => {
    setVisible(!visible);
    setBottomSheetValue(dataValue);
  };

  useEffect(() => {
    if (orcamento) {
      const idsToRemove = orcamento.map(
        (item: ServicesCompany) => item.id_company
      );

      const filteredArray1 = servicesMap.filter(
        (item: ServicesCompany) => !idsToRemove.includes(item.id_company)
      );

      setServicesCompany(filteredArray1);
    }
  }, [visible]);

  return {
    visible,
    viewActive,
    setViewActive,
    servicesCompany,
    bottomSheetValue,
    toggleBottomNavigationView,
    params,
  };
};

export default MapSectionViewModel;
