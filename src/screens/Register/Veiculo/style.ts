import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { DefaultTheme } from "styled-components";

export const Container = styled.SafeAreaView.attrs({
  flex: 1,
})`
  background-color: #fff;
`;

export const Wrapper = styled(KeyboardAwareScrollView)`
  margin-top: 5px;
  padding: 20px;
  padding-top: 16px;
  background-color: #e1eaf1;
`;

export const Title = styled.Text`
  font-family: Jost_400Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 50px;
`;

export const Separet = styled.View`
  margin-bottom: 16px;
`;

export const ContainerButton = styled.View`
  margin: 32px 0 24px 0;
  padding-bottom: 24px;
  width: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.full}%;
`;
