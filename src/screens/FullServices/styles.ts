import { LinearGradient } from "expo-linear-gradient";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

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

export const CardContainer = styled.TouchableOpacity`
  width: 80px;
  margin-right: 8px;
`;

export const CardContainerIcon = styled.View<{
  isActive: boolean;
  theme: DefaultTheme;
}>`
  background-color: ${(props: { isActive: boolean; theme: DefaultTheme }) =>
    props.isActive
      ? props.theme.colors.secondary
      : props.theme.colors.text.slogan};
  height: 80px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const CardIcon = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 48px;
  width: 48px;
`;

export const TitleCardCategoria = styled.Text<{
  isActive: boolean;
  theme: DefaultTheme;
}>`
  font-size: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fontSizes.xsmall}px;
  font-family: Jost_500Medium;
  color: ${(props: { isActive: boolean; theme: DefaultTheme }) =>
    props.isActive
      ? props.theme.colors.secondary
      : props.theme.colors.text.categoryCard};
  text-align: center;
`;

export const Service = styled.TouchableOpacity`
  min-height: 48px;
  background-color: #fff;
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  justify-content: center;
`;

export const ServiceTitle = styled.Text`
  color: #002547;
  font-size: 16px;
`;

export const WrapperList = styled.View`
  flex-direction: row;
  height: 120px;
`;

export const WrapperListServices = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: Jost_500Medium;
  font-size: 14px;
  text-align: center;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.dark};
`;
