import React from "react";
import AppModelView from "./AppModelView";
import { QueryClientProvider } from "@tanstack/react-query";
import { UserContextProvider } from "@contexts/userContext";
import { OrcamentoContextProvider } from "@contexts/orcamento";
import { ServicesMapContextProvider } from "@contexts/servicesMap";
import { ThemeProvider } from "styled-components";
import theme from "@utils/theme";

const AppProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
  const {
    queryClient,
    user,
    setUser,
    orcamento,
    setOrcamento,
    servicesMap,
    setServicesMap,
  } = AppModelView();

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider value={{ user, setUser }}>
        <OrcamentoContextProvider value={{ orcamento, setOrcamento }}>
          <ServicesMapContextProvider value={{ servicesMap, setServicesMap }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </ServicesMapContextProvider>
        </OrcamentoContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
