import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.Pressable`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 16px;
  min-height: 86px;
  border-radius: 13px;
  margin-bottom: 16px;
  border: 1px solid rgba(32, 32, 32, 0.03);
`;

export const HeaderInfoContainer = styled.View`
  width: ${Dimensions.get("screen").width - 150}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 14px;
  font-family: Jost_600SemiBold;
  color: #002547;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  max-width: 70%;
  text-overflow: clip;
  font-family: Jost_600SemiBold;
  color: #002547;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

export const TextInfo = styled.Text`
  font-size: 14px;
  margin-left: 4px;
  font-family: Jost_400Regular;
  color: #002547;
`;

export const LocationContainer = styled.View`
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
