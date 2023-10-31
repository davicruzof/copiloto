import styled from "styled-components/native";

export const Container = styled.Pressable`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 16px;
  min-height: 86px;
  border-radius: 13px;
  margin-bottom: 10px;
  border: 1px solid rgba(32, 32, 32, 0.03);
`;

export const Title = styled.Text<{ isActive: boolean }>`
  font-size: 20px;
  font-family: Jost_600SemiBold;
  margin-left: 12px;
  color: ${(props) => (props.isActive ? "#2C94F4" : "#A0A0A0")};
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
