import { Dimensions } from "react-native";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

const { height } = Dimensions.get("screen");

const sub = height * 0.3;

export const Container = styled.SafeAreaView.attrs({
  flex: 1,
})`
  background-color: #fff;
  padding-top: 32px;
`;

export const Wrapper = styled.View`
  flex: 1;
  padding: 0 ${({ theme }: { theme: DefaultTheme }) => theme.spacing.medium}px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.white};
`;

export const Title = styled.Text`
  font-family: Jost_500Medium;
  font-size: 24px;
  align-items: center;
  color: #000000;
  margin-bottom: 50px;
`;

export const ContainerButton = styled.View`
  position: absolute;
  left: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.small}px;
  width: 100%;
  margin-top: ${height - sub}px;

`;
