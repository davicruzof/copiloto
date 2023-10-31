import styled, { DefaultTheme } from "styled-components/native";

export const Category = styled.Pressable`
  width: 80px;
  margin-right: 8px;
`;

export const IconWrapper = styled.View<{
  isActive: boolean;
  theme: DefaultTheme;
}>`
  background-color: ${(props: { isActive: boolean; theme: DefaultTheme }) =>
    props.isActive
      ? props.theme.colors.secondary
      : props.theme.colors.text.slogan};
  height: 80px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const CategoryIcon = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 48px;
  width: 48px;
`;

export const CategoryTitle = styled.Text<{
  isActive: boolean;
  theme: DefaultTheme;
}>`
  font-size: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fontSizes.xsmall}px;
  font-family: Jost_500Medium;
  color: ${(props: { isActive: boolean; theme: DefaultTheme }) =>
    props.isActive
      ? props.theme.colors.secondary
      : props.theme.colors.text.categoryCard};
  text-align: center;
`;
