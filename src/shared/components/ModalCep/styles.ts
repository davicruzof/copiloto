import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin: 30px;
  align-items: center;
  justify-content: center;
`;

export const BgModal = styled.View`
  z-index: 1;
  width: 100%;
  opacity: 0.5;
  height: 100%;
  background: #000;
  position: absolute;
`;

export const ModalContainer = styled.View`
  z-index: 2;
  opacity: 1;
  width: 100%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
`;

export const ModalTitle = styled.Text`
  color: #121212;
  font-size: 24px;
  font-family: Jost_600SemiBold;
  margin-bottom: 8px;
`;

export const ModalDescription = styled.Text`
  color: #000;
  font-size: 14px;
  font-family: Jost_400Regular;
  text-align: center;
`;

export const Divider = styled.View`
  width: 90%;
  height: 1px;
  background-color: #dddddd;
  margin-bottom: 20px;
`;

export const ButtonClose = styled.Pressable`
  background-color: #fff;
`;

export const WrapperButtonClose = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-bottom: 4px;
`;
