import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.SafeAreaView.attrs({
  flex: 1,
})`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.white};
`;

export const Wrapper = styled.View`
  margin-top: 5px;
  flex: 1;
  padding: 0 ${({ theme }: { theme: DefaultTheme }) => theme.spacing.medium}px;
  padding-bottom: 32px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes.large}px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-right: 25%;
`;

export const CheckGroup = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 36px;
  margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
    theme.spacing.xxlarge}px;
`;

export const LabelRadio = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes.small}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.dark};
  font-family: Jost_700Bold;
`;

export const TextLink = styled.Text`
  text-decoration-line: underline;
  margin-left: 4px;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes.small}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
`;

export const CheckBoxContainerText = styled.View`
  flex-direction: row;
  margin-left: ${({ theme }: { theme: DefaultTheme }) =>
    theme.spacing.xsmall}px;
  align-items: center;
`;
