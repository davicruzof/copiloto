import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { height } = Dimensions.get("screen");

export const Container = styled.View`
  padding: 0 20px;
  padding-top: 100px;
  height: ${height}px;
  background-color: rgba(134, 197, 255, 0.1);
`;

export const List = styled.ScrollView`
  margin-bottom: 180px;
`;
