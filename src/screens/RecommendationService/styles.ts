import { LinearGradient } from "expo-linear-gradient";
import styled, { DefaultTheme } from "styled-components/native";

export const Background = styled(LinearGradient).attrs({
  colors: ["#FDFDFD", "#E1EAF1"],
})`
  height: 100%;
  width: 100%;
  background-color: #fdfdfd;
`;

export const Container = styled.SafeAreaView.attrs({
  flex: 1,
})``;

export const Wrapper = styled.View`
  flex: 1;
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.medium}px;
`;
export const Title = styled.Text`
  font-family: Jost_500Medium;
  font-size: 14px;
  text-align: center;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.dark};
`;

export const WrapperListServices = styled.View`
  margin-top: 24px;
`;

export const Service = styled.Pressable`
  min-height: 48px;
  background-color: #fff;
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const ServiceTitle = styled.Text`
  color: #002547;
  font-size: 16px;
`;

export const Checkbox = styled.View<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? props.theme.colors.primary : "#fff"};
  width: 16px;
  align-items: center;
  justify-content: center;
  height: 16px;
  margin-right: 8px;
  border-radius: 16px;
  border: 2px solid ${(props) => props.theme.colors.primary};
`;

export const ButtonsContainer = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  height: 110px;
  justify-content: space-between;
`;

export const ContainerModalBackground = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 0 24px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ContainerModal = styled.View`
  width: 100%;
  border-radius: 13px;
  background-color: white;
  padding: 24px;
`;

export const TitleModal = styled.Text`
  font-family: Jost_600SemiBold;
  font-size: 20px;
  text-align: center;
  color: #333333;
  margin-bottom: 22px;
`;

export const ContentModal = styled.Text`
  font-family: Jost_400Regular;
  font-size: 16px;
  text-align: center;
  color: #7e8b96;
  margin-bottom: 21px;
`;
