declare module "*.jpg";
declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.png";

declare module "styled-components/native";
