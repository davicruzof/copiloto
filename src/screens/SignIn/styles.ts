import { Dimensions } from "react-native";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

const { height } = Dimensions.get("screen");

const sub = height * 0.3;

export const Container = styled.SafeAreaView.attrs({
  flex: 1,
})`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.white};
  padding-top: 40px;
`;

export const Wrapper = styled.View`
  flex: 1;
  height: ${height}px;
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.medium}px;
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

export const ContainerButton = styled.View`
  position: absolute;
  left: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.medium}px;
  width: 100%;
  margin-top: ${height - sub}px;
`;
