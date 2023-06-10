import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const ButtonRecovery = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.large}px;
`;

export const RecoveryText = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  font-family: Jost_700Bold;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.small}px;
  margin-right: 10px;
`;
