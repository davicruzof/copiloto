import * as React from "react";

export interface IServiceRecommendationSelected {
  servicesRecommendationSelected: string[];
  setServicesRecommendationSelected: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}

export const ServicesRecommendationSelectedContext =
  React.createContext<IServiceRecommendationSelected>({
    servicesRecommendationSelected: [],
    setServicesRecommendationSelected: () => {},
  });

export const ServicesRecommendationSelectedContextProvider =
  ServicesRecommendationSelectedContext.Provider;
