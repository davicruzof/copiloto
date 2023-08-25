import { AxiosError } from "axios";
import { api } from "../api";
import { CategoryResponseList, ServiceRecommendResponseList } from "./types";

export const getListCategory = async (): Promise<CategoryResponseList> => {
  try {
    const { data } = await api.get("/user/categorias");
    return data;
  } catch (err) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};

export const getServicesRecommended = async (
  credentials: Array<string>
): Promise<ServiceRecommendResponseList> => {
  try {
    const { data } = await api.post("/user/servicerecommendation", {
      services: credentials,
    });
    return data;
  } catch (err) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};
