import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 13px;
  background: #fff;
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
`;

export const Header = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 5.424px;
  background-color: #c4c4c4;
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: Jost_700Bold;
  margin-left: 16px;
`;

export const Line = styled.View`
  background-color: #f1f1f1;
  height: 1px;
  width: 100%;
  margin: 16px 0;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemLabel = styled.Text`
  font-size: 14px;
  color: #000;
  font-family: Jost_400Regular;
`;
export const Value = styled.Text`
  font-size: 14px;
  color: #000;
  font-family: Jost_500Medium;
`;
