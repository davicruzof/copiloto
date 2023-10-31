import axios from "axios";

export const api = axios.create({
  baseURL: "https://app.meucopiloto.com.br/copiloto/index.php",
});
