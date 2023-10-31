import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.Pressable`
  background: ${(props: { theme: DefaultTheme }) => props.theme.colors.white};
  width: ${(props: { theme: DefaultTheme }) => props.theme.spacing.full}%;
  height: 48px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: ${(props: { theme: DefaultTheme }) =>
    props.theme.spacing.xxsmall}px;

  ${(props: any) => props.isBorder && `border: 1px solid #2C94F4;`}
`;

export const TextButton = styled.Text`
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.primary};
  font-family: Jost_600SemiBold;
  font-size: ${(props: { theme: DefaultTheme }) =>
    props.theme.fontSizes.small}px;
`;
