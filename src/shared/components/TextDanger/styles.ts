import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const DangerContainer = styled.View`
  height: 49px;
  width: 100%;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.danger};
  justify-content: center;
  padding-left: 16px;
  margin-top: 24px;
  border-radius: 4px;
`;
export const TextDanger = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.slogan};
  font-family: Jost_500Medium;
  font-size: 16px;
`;
