import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${(props: { theme: DefaultTheme }) => props.theme.colors.primary};
  width: ${(props: { theme: DefaultTheme }) => props.theme.spacing.full}%;
  height: 48px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: ${(props: { theme: DefaultTheme }) =>
    props.theme.spacing.xxsmall}px;
`;

export const TextButton = styled.Text`
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.white};
  font-family: Jost_600SemiBold;
  font-size: ${(props: { theme: DefaultTheme }) =>
    props.theme.fontSizes.medium}px;
`;
