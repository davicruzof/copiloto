export interface ServiceResponse {
  idservice: string;
  id_categoria: string;
  nome: string;
  created_at: string;
  updated_at: string;
  ordenate: string;
  active: string;
}

export interface CategoryResponse {
  idCategoria: string;
  nome: string;
  icon_white: string;
  icon_gray: string;
  created_at: string;
  updated_at: string;
  ordenate: string;
  active: string;
  services: ServiceResponse[];
}

export interface ServiceRecommendResponse {
  id_categoria: string;
  nome: string;
  recomended_id_service: string;
  recommendation_text: string;
}
