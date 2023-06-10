import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 72px;
  justify-content: center;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fontSizes.medium}px;
  display: flex;
  font-family: Jost_500Medium;
  align-items: center;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
`;

export const ButtonBack = styled.TouchableOpacity`
  padding: 10px;
  position: absolute;
  left: 20px;
`;
