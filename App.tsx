import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import Routes from "@navigation/index";
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
  Jost_300Light,
} from "@expo-google-fonts/jost";
import AppProvider from "./src/AppProvider";

export default function App() {
  const [fontLoading] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_700Bold,
    Jost_600SemiBold,
  });
  if (!fontLoading) {
    return <ActivityIndicator />;
  }

  return (
    <AppProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AppProvider>
  );
}
