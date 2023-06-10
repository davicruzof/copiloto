import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Label = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes.small}px;
  display: flex;
  align-items: center;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.dark};
  margin-top: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.large}px;
  margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
    theme.spacing.xsmall}px;
`;

export const InputText = styled.TextInput.attrs(
  (props: { theme: DefaultTheme }) => ({
    placeholderTextColor: props.theme.colors.disabled,
  })
)`
  display: flex;
  border: 2px solid ${(props: { focus: any }) => props.focus};
  border-radius: 8px;
  height: 45px;
  width: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.full}%;
  padding: 0 ${({ theme }: { theme: DefaultTheme }) => theme.spacing.small}px;
`;
