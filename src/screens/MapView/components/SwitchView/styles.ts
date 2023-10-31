import styled from "styled-components/native";

export const Container = styled.View<{ top: number }>`
  position: absolute;
  top: ${(props) => props.top + 150}px;
  right: 30px;
  gap: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 99;
  padding: 14px 24px;
  border-radius: 8px;
  background-color: #fdfdfd;
`;
