import React from "react";
import AppModelView from "./AppModelView";
import { QueryClientProvider } from "@tanstack/react-query";
import { UserContextProvider } from "@contexts/userContext";
import { OrcamentoContextProvider } from "@contexts/orcamento";
import { ThemeProvider } from "styled-components";
import theme from "@utils/theme";
import { ServicesSelectedContextProvider } from "@contexts/servicesSelected";
import { ServicesRecommendationSelectedContextProvider } from "@contexts/servicesRecommendationSelected";

const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const {
    queryClient,
    user,
    setUser,
    orcamento,
    setOrcamento,
    servicesSelected,
    setServicesSelected,
    servicesRecommendationSelected,
    setServicesRecommendationSelected,
  } = AppModelView();

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider value={{ user, setUser }}>
        <OrcamentoContextProvider value={{ orcamento, setOrcamento }}>
          <ServicesSelectedContextProvider value={{ servicesSelected, setServicesSelected }}>
            <ServicesRecommendationSelectedContextProvider
              value={{
                servicesRecommendationSelected,
                setServicesRecommendationSelected,
              }}
            >
              <ThemeProvider theme={theme}>
                <ServicesSelectedContextProvider
                  value={{ servicesSelected, setServicesSelected }}
                >
                  {children}
                </ServicesSelectedContextProvider>
              </ThemeProvider>
            </ServicesRecommendationSelectedContextProvider>
          </ServicesSelectedContextProvider>
        </OrcamentoContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
