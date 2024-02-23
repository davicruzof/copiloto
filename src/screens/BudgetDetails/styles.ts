import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { height } = Dimensions.get("screen");

export const Container = styled.View``;

export const Wrapper = styled.View`
  padding: 16px;
  background-color: #fcfdfe;
  height: 100%;
`;

export const Header = styled.View.attrs({
  shadowColor: "#202020",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.6,
  shadowRadius: 20,

  elevation: 1,
})`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 16px;
  border-radius: 13px;
`;

export const WrapperHeader = styled.View`
  margin-left: 16px;
  flex-direction: column;
`;

export const TitleHeader = styled.Text`
  color: #333;
  font-family: Jost_600SemiBold;
  font-size: 20px;
  width: ${height * 0.3}px;
`;

export const Title = styled.Text`
  color: #000;
  font-family: Jost_600SemiBold;
  font-size: 16px;
`;

export const Line = styled.View`
  background-color: #f1f1f1;
  height: 1px;
  width: 100%;
  margin: 16px 0;
`;

export const WrapperService = styled.View`
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

export const ButtonChatTex = styled.Text`
  font-size: 14px;
  color: #000;
  font-family: Jost_500Medium;
  margin-left: 8px;
`;

export const ButtonChat = styled.Pressable`
  height: 47px;
  background-color: #fff;
  border: 1px solid #e1eaf1;
  padding-left: 16px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  margin: 32px 0;
`;

export const ButtonWrapper = styled.View`
  height: 112px;
  justify-content: space-between;
  margin: 48px 0;
`;
