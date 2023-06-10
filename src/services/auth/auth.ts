import { AxiosError } from "axios";
import { api } from "../api";
import { UserLogin } from "../types";
import { signUpProps } from "./types";

export const signIn = async (credentials: UserLogin) => {
  try {
    const { data } = await api.post("/auth/login", credentials);
    return data;
  } catch (err) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};

export const signup = async (credentials: signUpProps) => {
  try {
    const { data } = await api.post("/auth/create", credentials);
    return data;
  } catch (err) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};

export const getTerms = async () => {
  try {
    const { data } = await api.get("/auth/terms");
    return data;
  } catch (err) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};
