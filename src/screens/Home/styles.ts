import styled, { DefaultTheme } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled(LinearGradient).attrs({
  colors: ["#FDFDFD", "#E1EAF1"],
})`
  padding: 0 16px;
  height: 100%;
  width: 100%;
  background-color: #fdfdfd;
`;

export const Wrapper = styled.SafeAreaView.attrs({
  flex: 1,
})`
  margin-top: 40px;
`;

export const Username = styled.Text`
  font-family: Jost_600SemiBold;
  font-size: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fontSizes.xsmall}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
    theme.spacing.small}px;
`;

export const Settings = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.dark};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes.large}px;
  font-family: Jost_700Bold;
  width: 70%;
  margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
    theme.spacing.large}px;
`;

export const Search = styled.Pressable`
  height: 56px;
  width: 100%;
  border-radius: 45px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.white};
  margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
    theme.spacing.medium}px;
  align-items: center;
  flex-direction: row;
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.small}px;
`;

export const SearchText = styled.Text`
  margin-left: 10px;
  font-family: Jost_600SemiBold;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.dark};
`;

export const IconSearch = styled(AntDesign).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    size: 16,
    color: theme.colors.primary,
    name: "search1",
  })
)``;

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
`;

export const WrapperListServices = styled.View`
  margin-top: 24px;
`;
