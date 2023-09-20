export interface signUpProps {
  data_nascimento: string;
  nome: string;
  email: string;
  telefone: string;
  sexo: string;
}

export interface tokenValidate {
  idUser: string;
  token: string;
}

export interface passwordCreate {
  idUser: string;
  senha: string;
}
