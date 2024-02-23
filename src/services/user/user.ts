import { AxiosError } from "axios";
import { api } from "../api";
import { CategoryResponse, ServiceRecommendResponse } from "./types";

export const getListCategory = async (): Promise<CategoryResponse[]> => {
  try {
    const { data } = await api.get("/user/categorias");
    return data.data;
  } catch (err) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};

export const getServicesRecommended = async (
  credentials: Array<string>
): Promise<ServiceRecommendResponse[]> => {
  try {
    const { data } = await api.post("/user/servicerecommendation", {
      services: credentials,
    });
    return data.data;
  } catch (err) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};
