import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{ disable: boolean }>`
  background: ${(props: { theme: DefaultTheme }) => props.theme.colors.white};
  width: ${(props: { theme: DefaultTheme }) => props.theme.spacing.full}%;
  height: 48px;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 0 16px;
  justify-content: space-between;
  border-radius: ${(props: { theme: DefaultTheme }) =>
    props.theme.spacing.xxsmall}px;
  opacity: ${({ disable }) => (disable ? 0.6 : 1)};
`;

export const TextButton = styled.Text`
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.primary};
  font-family: Jost_600SemiBold;
  font-size: ${(props: { theme: DefaultTheme }) =>
    props.theme.fontSizes.medium}px;
`;
