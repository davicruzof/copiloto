import { Pressable } from "react-native";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.white};
  padding: 100px 16px 100px 16px;
`;

export const Header = styled.View`
  align-items: flex-end;
  margin-bottom: 16px;
`;

export const ButtonClose = styled.Pressable`
  height: 40px;
  width: 40px;
`;

export const ButtonCloseText = styled.Text`
  font-size: 24px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.dark};
`;

export const Title = styled.Text`
  margin-bottom: 24px;
  font-size: 20px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.black};
`;

export const ButtonSelection = styled.Pressable`
  height: 55px;
  width: 100%;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.disabled};
  padding-left: 12px;
  justify-content: center;
  margin: 10px 0;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
`;
