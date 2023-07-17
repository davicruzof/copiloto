import React from "react";
import { AntDesign } from "@expo/vector-icons";
import DeviceInfo from "react-native-device-info";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import SearchHome from "../screens/SearchHome";
import RecommendationService from "../screens/RecommendationService";
import FullServices from "../screens/FullServices";
import { Profile } from "../screens/Profile";
import { Map } from "../screens/MapView";
import Budget from "../screens/Budget";
import { BudgetDetails } from "../screens/BudgetDetails";
import Schedules from "../screens/Schedules";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const User = () => {
  return (
    <Tab.Navigator
      initialRouteName="calendar"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          return <AntDesign name={route.name as any} size={31} color={color} />;
        },
        tabBarActiveTintColor: "#2C94F4",
        tabBarInactiveTintColor: "#A0A0A0",
        title: "",
        tabBarStyle: {
          height: DeviceInfo.hasNotch() ? 90 : 70,
          paddingTop: 10,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="calendar" component={Schedules} />
      <Tab.Screen name="calculator" component={Budget} />
      <Tab.Screen name="user" component={Profile} />
    </Tab.Navigator>
  );
};

export function AuthRoutes() {
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
