import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: "http://parallelum.com.br/fipe/api/v2",
});

export const getBrands = async () => {
  try {
    const { data } = await api.get("/cars/brands");
    return data;
  } catch (err) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};
export const getModels = async (brandId: number) => {
  try {
    const { data } = await api.get(`/cars/brands/${brandId}/models`);
    return data;
  } catch (err) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};
