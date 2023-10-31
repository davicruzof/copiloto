import React from "react";
import { AntDesign } from "@expo/vector-icons";
import DeviceInfo from "react-native-device-info";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "@screens/Home";
import Profile from "@screens/Profile";
import Budget from "@screens/Budget";
import Schedules from "@screens/Schedules";
import theme from "@shared/utils/theme";

const Tab = createBottomTabNavigator();

export const User = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          return <AntDesign name={route.name as any} size={31} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.secondary,
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
