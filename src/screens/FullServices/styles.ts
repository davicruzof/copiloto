import { LinearGradient } from "expo-linear-gradient";
import styled, { DefaultTheme } from "styled-components/native";

export const Background = styled(LinearGradient).attrs({
  colors: ["#FDFDFD", "#E1EAF1"],
})`
  height: 100%;
  width: 100%;
  background-color: #fdfdfd;
`;

export const Container = styled.SafeAreaView.attrs({
  flex: 1,
})``;

export const Wrapper = styled.View`
  flex: 1;
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.medium}px;
`;

export const Service = styled.Pressable`
  min-height: 48px;
  background-color: #fff;
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  justify-content: center;
`;

export const ServiceTitle = styled.Text`
  color: #002547;
  font-size: 16px;
`;

export const WrapperList = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const WrapperListServices = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: Jost_500Medium;
  font-size: 14px;
  text-align: center;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.dark};
`;
