import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  padding-top: 48px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.white};
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 72px;
  justify-content: center;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.white};
`;

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fontSizes.medium}px;
  display: flex;
  font-family: Jost_500Medium;
  align-items: center;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
`;

export const ButtonBack = styled.Pressable`
  padding: 10px;
  position: absolute;
  left: 4px;
`;
