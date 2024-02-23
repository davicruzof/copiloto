import { useState } from "react";

import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { IOrcamentoContext } from "@contexts/orcamento";

const AppModelView = () => {
  const [user, setUser] = useState(null);
  const [orcamento, setOrcamento] = useState<IOrcamentoContext | null>(null);
  const [servicesSelected, setServicesSelected] = useState<string[]>([]);
  const [servicesRecommendationSelected, setServicesRecommendationSelected] = useState<string[]>([]);

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
    user,
    setUser,
    orcamento,
    setOrcamento,
    servicesSelected,
    setServicesSelected,
    servicesRecommendationSelected,
    setServicesRecommendationSelected
  };
};

export default AppModelView;
