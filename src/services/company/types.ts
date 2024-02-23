export interface ServicesCompany {
  title: string;
  value: string;
  distance: string;
  isHouse: string;
  rating: string;
  latitude: string;
  longitude: string;
  id_company: string;
  company_image: string;
  services_details: Servicesdetail[];
}

export interface Servicesdetail {
  id_service: string;
  service: string;
  categoria: string;
  price: string;
}

export interface Companys {
  services: string[];
  cep?: string;
  coordenadas?: { latitude: string; longitude: string };
}
