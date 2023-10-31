import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RoutesWithoutAuth from "./RoutesWithoutAuth";
import AuthRoutes from "./StackAuth";
import { UserContext } from "../contexts/userContext";
import { Spinner } from "@shared/components/Spinner";

const Routes = () => {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const userAuthenticated = async () => {
    const userValue = await AsyncStorage.getItem("@user");
    if (userValue) {
      setUser({ user: JSON.parse(userValue), auth: true });
    }
    setLoading(false);
  };

  useEffect(() => {
    userAuthenticated();
  }, [user]);

  if (loading) {
    return <Spinner />;
  }

  return user?.auth ? <AuthRoutes /> : <RoutesWithoutAuth />;
};

export default Routes;
