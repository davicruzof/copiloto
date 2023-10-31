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
`;

export const ServiceTitle = styled.Text`
  color: #002547;
  font-size: 16px;
  font-family: Jost_500Medium;
`;

export const Checkbox = styled.View<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? props.theme.colors.primary : "#fff"};
  width: 18px;
  align-items: center;
  justify-content: center;
  height: 18px;
  margin-right: 8px;
  border-radius: 16px;
  border: ${({ active }) => (active ? 0 : 2)}px solid
    ${(props) => props.theme.colors.primary};
`;
