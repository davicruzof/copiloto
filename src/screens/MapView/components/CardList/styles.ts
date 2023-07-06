import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  shadowColor: "#202020",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.6,
  shadowRadius: 20,

  elevation: 6,
})`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 16px;
  min-height: 86px;
  border-radius: 13px;
  margin-bottom: 16px;
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
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 20px;
  max-width: 70%;
  text-overflow: clip;
  font-family: Jost_600SemiBold;
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
