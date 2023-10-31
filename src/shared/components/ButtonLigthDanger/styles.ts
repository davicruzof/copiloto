import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.Pressable`
  width: ${(props: { theme: DefaultTheme }) => props.theme.spacing.full}%;
  padding: 16px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: ${(props: { theme: DefaultTheme }) =>
    props.theme.spacing.xxsmall}px;
  margin: 8px 0;
`;

export const TextButton = styled.Text`
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.danger};
  font-family: Jost_600SemiBold;
  font-size: ${(props: { theme: DefaultTheme }) =>
    props.theme.fontSizes.small}px;
`;
