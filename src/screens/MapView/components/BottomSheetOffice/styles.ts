import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View<{ bottom: number }>`
  margin-bottom: ${(props) => -props.bottom}px;
  padding: 24px 16px;
  padding-bottom: ${(props) => props.bottom + 8}px;
  border-top-right-radius: 13px;
  border-top-left-radius: 13px;
  background-color: #fff;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const HeaderInfoContainer = styled.View`
  width: ${Dimensions.get("screen").width - (64 + 16 + 24 + 20)}px;
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: Jost_600SemiBold;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

export const TextInfo = styled.Text`
  font-size: 14px;
  font-family: Jost_400Regular;
`;

export const LocationContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 8px;
  gap: 8px;
`;

export const DividerLine = styled.View`
  height: 1px;
  width: 100%;
  background-color: #f1f1f1;
  margin: 16px 0;
`;
