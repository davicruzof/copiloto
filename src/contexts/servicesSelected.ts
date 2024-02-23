import * as React from "react";

export interface IServiceSelected {
  servicesSelected: string[];
  setServicesSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ServicesSelectedContext = React.createContext<IServiceSelected>({
  servicesSelected: [],
  setServicesSelected: () => {},
});

export const ServicesSelectedContextProvider = ServicesSelectedContext.Provider;
