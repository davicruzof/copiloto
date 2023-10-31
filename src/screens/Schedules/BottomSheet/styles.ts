import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View<{ bottom: number }>`
  margin-bottom: ${(props: any) => -props.bottom}px;
  padding: 24px 16px;
  padding-bottom: ${(props: any) => props.bottom + 8}px;
  border-top-right-radius: 13px;
  border-top-left-radius: 13px;
  background-color: #fff;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
`;

export const Wrapper = styled.View`
  max-width: ${Dimensions.get("screen").width - 100}px;
  flex-direction: column;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 20px;
  max-width: 85%;
  text-overflow: clip;
  font-family: Jost_600SemiBold;
  color: #fff;
  margin-bottom: 16px;
`;

const BaseText = styled.Text`
  color: #fdfdfd;
  font-size: 16px;
`;

export const Services = styled(BaseText)`
  font-family: Jost_300Light;
`;

export const Value = styled(BaseText)`
  font-size: 16px;
`;

export const ScheduleItem = styled.Pressable`
  background-color: #0056a5;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border-left-width: 10px;
  border-left-color: #002547;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;
