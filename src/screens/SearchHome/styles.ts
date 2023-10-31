import { AntDesign } from "@expo/vector-icons";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView.attrs({
  flex: 1,
})`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.white};
  padding-top: 40px;
`;

export const Wrapper = styled.View`
  flex: 1;
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.medium}px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.white};
`;

export const Search = styled.Pressable`
  height: 48px;
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

export const ButtonList = styled.Pressable`
  height: 48px;
  width: 100%;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.white};
  margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
    theme.spacing.small}px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: "#AEBECC",
})`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.white};
  height: 56px;
  font-family: Jost_600SemiBold;
  margin-left: 10px;
  color: #000;
`;

export const IconBack = styled(AntDesign).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    size: 16,
    color: theme.colors.primary,
    name: "arrowleft",
  })
)``;

export const TextButton = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.dark};
  font-family: Jost_500Medium;
`;
