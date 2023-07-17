import React, { useState } from "react";
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
  Jost_300Light,
} from "@expo-google-fonts/jost";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import theme from "./src/shared/utils/theme";
import Routes from "./src/routes";
import { UserContextProvider } from "./src/contexts/userContext";
import { OrcamentoContextProvider } from "./src/contexts/orcamento";

export default function App() {
  const [fontLoading] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_700Bold,
    Jost_600SemiBold,
  });

  const [user, setUser] = useState(null);
  const [orcamento, setOrcamento] = useState(null);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: (_, error) => {
          const err = error as AxiosError;
          const status = err?.response?.status;
          if (!status || [401, 403, 404].includes(status)) {
            return false;
          }
          return true;
        },
      },
    },
  });

  if (!fontLoading) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider value={{ user, setUser }}>
          <OrcamentoContextProvider value={{ orcamento, setOrcamento }}>
            <ThemeProvider theme={theme}>
              <Routes />
            </ThemeProvider>
          </OrcamentoContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
