import styled from "styled-components/native";

export const Container = styled.View<{ bottom: number }>`
  margin-bottom: ${(props: any) => -props.bottom}px;
  padding: 24px 16px;
  padding-bottom: ${(props: any) => props.bottom + 8}px;
  border-top-right-radius: 13px;
  border-top-left-radius: 13px;
  background-color: #fff;
  align-items: center;
`;
