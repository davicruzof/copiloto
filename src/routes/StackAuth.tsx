import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchHome from "@screens/SearchHome";
import RecommendationService from "@screens/RecommendationService";
import FullServices from "@screens/FullServices";
import { Map } from "@screens/MapView";
import { BudgetDetails } from "@screens/BudgetDetails";
import { User } from "./AuthRoutes";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen name="Root" component={User} />
      <Stack.Screen name="SearchHome" component={SearchHome} />
      <Stack.Screen name="FullServices" component={FullServices} />
      <Stack.Screen name="MapView" component={Map} />
      <Stack.Screen name="BudgetDetails" component={BudgetDetails} />
      <Stack.Screen
        name="RecommendationService"
        component={RecommendationService}
      />
    </Stack.Navigator>
  );
}