import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const ContainerRadius = styled.View`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const ContainerSelect = styled.View`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.primary};
`;

export const TextRadius = styled.Text`
  font-family: Jost_400Regular;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes.small}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.radius};
  margin-left: ${({ theme }: { theme: DefaultTheme }) =>
    theme.spacing.xxsmall}px;
`;
