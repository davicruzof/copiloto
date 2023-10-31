import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.Pressable`
  flex-direction: row;
`;

export const ContainerRadius = styled.View<{ selected: boolean }>`
  height: 24px;
  width: 24px;
  padding: 4px;
  border-width: 2px;
  border-radius: 4px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.white};
  border: ${({ selected }) => (selected ? 0 : 2)}px solid
    ${({ theme }: { theme: DefaultTheme }) => theme.colors.disabled};
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
