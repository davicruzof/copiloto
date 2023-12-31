import { AxiosError } from "axios";
import { api } from "../api";
import { Companys, ServicesCompany } from "./types";

export const getCompanyServices = async (
  credentials: Companys
): Promise<ServicesCompany[]> => {
  try {
    const { data } = await api.post(
      "/company/getcompanyserviceprices",
      credentials
    );
    return data.data;
  } catch (err) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};
