import { AxiosError } from "axios";
import { api } from "../api";
import { UserLogin } from "../types";
import { passwordCreate, signUpProps, tokenValidate } from "./types";

export const signIn = async (credentials: UserLogin) => {
  try {
    const { data } = await api.post("/auth/login", credentials);
    return data;
  } catch (err) {
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};

export const signup = async (credentials: signUpProps) => {
  try {
    const { data } = await api.post("/auth/create", credentials);
    return data;
  } catch (err) {
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};

export const getTerms = async () => {
  try {
    const { data } = await api.get("/auth/terms");
    return data;
  } catch (err) {
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};

export const validateToken = async (credentials: tokenValidate) => {
  try {
    const { data } = await api.post("/auth/token", {
      idUser: credentials.idUser,
      token: credentials.token,
    });
    return data;
  } catch (err) {
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};

export const resendToken = async (idUser: string) => {
  try {
    const { data } = await api.post("/auth/resend", { idUser });
    return data;
  } catch (err) {
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};

export const createPassword = async (credentials: passwordCreate) => {
  try {
    const { data } = await api.post("/auth/password", {
      idUser: credentials.idUser,
      senha: credentials.senha,
    });
    return data;
  } catch (err) {
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};

export const recoveryPassword = async (email: string) => {
  try {
    const { data } = await api.post("/auth/recovery", {
      email,
    });
    return data;
  } catch (err) {
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};
