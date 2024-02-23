export interface ScheduleReturn {
  data: Schedule[];
  success: boolean;
  message: string;
}

export interface Schedule {
  company_name: string;
  value: string;
  id: string;
  status: string;
  schedule_date: string;
  schedule_hour: string;
  schedule_period: string;
  services: Servico[];
}

export interface Servico {
  service: string;
  proposta: string;
}

export interface DetailsReturn {
  success: boolean;
  message: string;
  data: Details[];
}

export interface Details {
  id: string;
  title: string;
  value: string;
  date: string;
  schedule_period: string;
  appointment_hour: string;
  company_image: string;
  id_schedule_status: string;
  services: Service[];
  status_history: StatusHistory[];
}

export interface StatusHistory {
  order_number: string;
  title: string;
  date: string;
  description?: any;
}

export interface Service {
  title: string;
  value: string;
}

export interface CreateSchedule {
  services: string[];
  companies: string[];
  id_vehicle: number;
}
