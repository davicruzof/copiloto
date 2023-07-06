import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #e1eaf1;
  flex: 1;
`;

export const Wrapper = styled.View`
  padding: 16px;
  padding-top: 24px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 20px;
  font-family: Jost_700Bold;
  margin-bottom: 16px;
`;

export const Button = styled.TouchableOpacity<{ active: Boolean }>`
  border-radius: 8px;
  background: ${(props) => (props.active ? "#f4f7fa" : "#e1eaf1")};
  width: 202px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  margin-bottom: 16px;
`;

export const ButtonText = styled.Text`
  color: #191a1b;
  font-size: 14px;
  font-family: Jost_500Medium;
  margin-left: 14px;
`;
