import * as React from "react";

export interface IOrcamentoContext {
  company_image: string;
  distance: string;
  formatted_distance: string;
  id_company: string;
  isHouse: string;
  latitude: string;
  longitude: string;
  rating: string;
  services_details: any[];
  title: string;
  value: string;
}

export const OrcamentoContext = React.createContext<any>(null);

export const OrcamentoContextProvider = OrcamentoContext.Provider;
