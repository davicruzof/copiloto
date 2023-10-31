import { MaterialIcons } from "@expo/vector-icons";
import styled, { DefaultTheme } from "styled-components/native";
import { ButtonType } from "./types";

export const Container = styled.Pressable<{
  disable?: boolean;
  isIcon?: boolean;
  type: ButtonType;
}>`
  background: ${({ theme, type }: { theme: DefaultTheme; type: ButtonType }) =>
    type === "primary" ? theme.colors.primary : theme.colors.text.slogan};
  width: ${(props: { theme: DefaultTheme }) => props.theme.spacing.full}%;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 12px 16px;
  margin-bottom: 20px;
  border: ${({ type }: { type: ButtonType }) =>
      type === "secondary" ? 1 : 0}px
    solid #e1eaf1;
  justify-content: ${({ isIcon }: { isIcon: boolean }) =>
    isIcon ? "space-between" : "center"};
  border-radius: ${(props: { theme: DefaultTheme }) =>
    props.theme.spacing.xxsmall}px;
  opacity: ${({ disable }: { disable: boolean }) => (disable ? 0.6 : 1)};
`;

export const TextButton = styled.Text<{
  type: ButtonType;
}>`
  color: ${({ theme, type }: { theme: DefaultTheme; type: ButtonType }) =>
    type === "primary" ? theme.colors.white : theme.colors.primary};
  font-family: Jost_600SemiBold;
  font-size: ${(props: { theme: DefaultTheme }) =>
    props.theme.fontSizes.medium}px;
`;

export const IconArrow = styled(MaterialIcons).attrs({
  name: "keyboard-arrow-right",
  size: 24,
})`
  color: ${({ theme, type }: { theme: DefaultTheme; type: ButtonType }) =>
    type === "primary" ? theme.colors.white : theme.colors.primary};
`;
