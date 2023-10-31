import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  width: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.full}%;
  height: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.full}%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Fundo = styled.Image.attrs({
  resizeMode: "cover",
})`
  flex: 1;
  width: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.full}%;
  height: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.full}%;
  position: absolute;
`;

export const Wrapper = styled.View`
  height: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.full}%;
  padding: 0 ${({ theme }: { theme: DefaultTheme }) => theme.spacing.small}px;
  align-items: center;
  justify-content: flex-end;
  width: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.full}%;
  margin-bottom: 50%;
`;

export const Slogan = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.large}px;
  display: flex;
  align-items: center;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.slogan};
  margin-top: 91px;
  font-family: Jost_500Medium;
  margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
    theme.spacing.large}px;
`;

export const ContainerButtons = styled.View`
  width: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.full}%;
  height: 112px;
  justify-content: space-between;
`;
