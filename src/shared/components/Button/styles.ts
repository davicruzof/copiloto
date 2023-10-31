import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.Pressable<{ disable: boolean }>`
  background: ${(props: { theme: DefaultTheme }) => props.theme.colors.primary};
  width: ${(props: { theme: DefaultTheme }) => props.theme.spacing.full}%;
  min-height: 48px;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
  justify-content: center;
  border-radius: ${(props: { theme: DefaultTheme }) =>
    props.theme.spacing.xxsmall}px;
  opacity: ${({ disable }) => (disable ? 0.6 : 1)};
`;

export const TextButton = styled.Text`
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.white};
  font-family: Jost_600SemiBold;
  font-size: ${(props: { theme: DefaultTheme }) =>
    props.theme.fontSizes.small}px;
`;
