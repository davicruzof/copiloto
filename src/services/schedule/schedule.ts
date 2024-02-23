import { AxiosError } from "axios";
import { api } from "../api";
import { CreateSchedule, DetailsReturn, ScheduleReturn } from "./types";

export const getSchedules = async (idUser: number): Promise<ScheduleReturn> => {
  try {
    const { data } = await api.get(`/schedule/services_schedule/${idUser}`);
    return data;
  } catch (err) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};

export const getScheduleDetails = async (
  idSchedule: number
): Promise<DetailsReturn> => {
  try {
    const { data } = await api.get(`/schedule/schedule_details/${idSchedule}`);
    return data;
  } catch (err) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};

export const createSchedule = async ({
  services,
  companies,
  id_vehicle = 1,
}: CreateSchedule): Promise<ScheduleReturn> => {
  try {
    const { data } = await api.post("/schedule/service_estimate", {
      services,
      companies,
      id_vehicle,
    });

    return data;
  } catch (err) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};
