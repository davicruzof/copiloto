import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View<{ bottom: number }>`
  min-height: 300px;
  padding: 24px 16px;
  padding-bottom: ${({ bottom }: { bottom: number }) => bottom + 12}px;
  border-top-right-radius: 13px;
  border-top-left-radius: 13px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.white};
  align-items: center;
`;

export const WrapperTerms = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
