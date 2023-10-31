import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import theme from "./src/shared/utils/theme";
import Routes from "@navigation/index";
import { UserContextProvider } from "./src/contexts/userContext";
import { OrcamentoContextProvider } from "./src/contexts/orcamento";
import { ServicesMapContextProvider } from "./src/contexts/servicesMap";
import AppModelView from "./AppModelView";

export default function App() {
  const {
    queryClient,
    fontLoading,
    user,
    setUser,
    orcamento,
    setOrcamento,
    servicesMap,
    setServicesMap,
  } = AppModelView();

  if (!fontLoading) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider value={{ user, setUser }}>
          <OrcamentoContextProvider value={{ orcamento, setOrcamento }}>
            <ServicesMapContextProvider value={{ servicesMap, setServicesMap }}>
              <ThemeProvider theme={theme}>
                <Routes />
              </ThemeProvider>
            </ServicesMapContextProvider>
          </OrcamentoContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
