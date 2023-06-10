import styled from "styled-components/native";

export const Container = styled.SafeAreaView.attrs({
  flex: 1,
})`
  background-color: #e1eaf1;
`;

export const Title = styled.Text`
  font-family: Jost_500Medium;
  font-size: 24px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 50px;
`;

export const ContainerInfos = styled.View`
  margin-top: 32px;
`;

export const TitleInfo = styled.Text`
  font-family: Jost_400Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #002547;
  margin-top: 12px;
`;

export const TextInfo = styled.Text`
  font-family: Jost_400Regular;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => (props.active ? "#2C94F4" : "#002547")};
  margin-top: 12px;
  text-decoration: ${(props) => (props.active ? "line-through" : "none")};
`;
