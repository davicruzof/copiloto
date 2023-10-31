import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.Pressable`
  width: ${(props: { theme: DefaultTheme }) => props.theme.spacing.full}%;
  height: 48px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: ${(props: { theme: DefaultTheme }) =>
    props.theme.spacing.xxsmall}px;
  margin-top: 32px;
`;

export const TextButton = styled.Text`
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.danger};
  font-family: Jost_600SemiBold;
  font-size: ${(props: { theme: DefaultTheme }) =>
    props.theme.fontSizes.small}px;
`;
