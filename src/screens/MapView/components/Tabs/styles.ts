import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #ffff;
  height: 56px;
  align-items: center;
  flex-direction: row;
  border-top-width: 1px;
  border-color: #f2f2f2;
`;

export const ButtonTab = styled.Pressable<{ isActive: boolean }>`
  background-color: #fff;
  height: 56px;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  border-bottom-width: 4px;
  border-color: ${(props) => (props.isActive ? "#2c94f4" : "#AEBECC")};
`;

export const ButtonText = styled.Text<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "#2c94f4" : "#AEBECC")};
  font-family: Jost_600SemiBold;
  font-size: 16px;
`;
