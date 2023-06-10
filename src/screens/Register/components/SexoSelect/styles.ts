import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 24px;
  gap: 20px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes.small}px;
  display: flex;
  align-items: center;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.dark};
  margin-bottom: 12px;
`;
