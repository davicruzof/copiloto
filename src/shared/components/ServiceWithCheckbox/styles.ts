import styled from "styled-components/native";

export const Service = styled.Pressable`
  min-height: 48px;
  background-color: #fff;
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoButton = styled.Pressable`
  padding: 4px;
  z-index: 1;
`;

export const Content = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;

export const ServiceTitle = styled.Text`
  color: #002547;
  font-size: 16px;
  font-family: Jost_500Medium;
  margin-left: 8px;
`;

export const Checkbox = styled.View`
  background-color: #fff;
  width: 16px;
  align-items: center;
  justify-content: center;
  height: 16px;
  border-radius: 16px;
  border: 2px solid
    ${(props: { theme: { colors: { primary: any } } }) =>
      props.theme.colors.primary};
`;
