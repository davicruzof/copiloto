import { useContext, useEffect, useState } from "react";
import hookPermissionLocation from "@hooks/permissionLocation";
import { ServicesMapContext } from "@contexts/servicesMap";
import { OrcamentoContext } from "@contexts/orcamento";
import { ServicesCompany } from "@services/company/types";

const MapSectionViewModel = () => {
  const { orcamento } = useContext(OrcamentoContext);
  const { servicesMap } = useContext(ServicesMapContext);
  const [viewActive, setViewActive] = useState("list");
  const [visible, setVisible] = useState(false);
  const [mapPermission, setMapPermission] = useState(false);
  const [bottomSheetValue, setBottomSheetValue] = useState({});
  const [servicesCompany, setServicesCompany] =
    useState<ServicesCompany[]>(servicesMap);

  const [coordenantes, setCoordenantes] = useState<{
    latitude: string;
    longitude: string;
  } | null>(null);

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

  const { requestPermission } = hookPermissionLocation();

  useEffect(() => {
    (async () => {
      const permission = await requestPermission();
      if (permission?.coordenadas) {
        setCoordenantes(permission.coordenadas);
        setMapPermission(true);
      }
    })();
  }, []);

  return {
    visible,
    viewActive,
    coordenantes,
    mapPermission,
    setViewActive,
    servicesCompany,
    bottomSheetValue,
    toggleBottomNavigationView,
  };
};

export default MapSectionViewModel;
