import { TouchableOpacity } from "react-native";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView.attrs({
  flex: 1,
})`
  background-color: #e1eaf1;
`;

export const Wrapper = styled.TouchableOpacity`
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
  left: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.medium}px;
  bottom: 56px;
  width: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.full}%;
`;
