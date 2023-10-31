import { useState } from "react";
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
  Jost_300Light,
} from "@expo-google-fonts/jost";
import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";


const AppModelView = () => {
  const [fontLoading] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_700Bold,
    Jost_600SemiBold,
  });

  const [user, setUser] = useState(null);
  const [orcamento, setOrcamento] = useState(null);
  const [servicesMap, setServicesMap] = useState(null);

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

  return {
    queryClient,
    fontLoading,
    user,
    setUser,
    orcamento,
    setOrcamento,
    servicesMap,
    setServicesMap,
  };
};

export default AppModelView;
