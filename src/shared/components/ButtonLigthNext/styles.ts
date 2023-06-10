import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const ButtonRecovery = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e1eaf1;
  border-radius: 8px;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  justify-content: space-between;
  margin-top: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.large}px;
`;

export const RecoveryText = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  font-family: Jost_700Bold;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.small}px;
  margin-right: 10px;
`;
