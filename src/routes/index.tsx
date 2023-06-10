import React, { useContext, useEffect, useState } from "react";
import { RoutesWithoutAuth } from "./RoutesWithoutAuth";
import { AuthRoutes } from "./AuthRoutes";
import { UserContext } from "../contexts/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Spinner } from "../shared/components/Spinner";

const Routes = () => {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const userValue = await AsyncStorage.getItem("@user");
      if (userValue) {
        setUser({ user: JSON.parse(userValue), auth: true });
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return user?.auth ? <AuthRoutes /> : <RoutesWithoutAuth />;
};

export default Routes;
