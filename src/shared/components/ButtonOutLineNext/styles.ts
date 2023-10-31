import styled, { DefaultTheme } from "styled-components/native";

export const ButtonRecovery = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.large}px;
`;

export const RecoveryText = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  font-family: Jost_700Bold;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.small}px;
`;
