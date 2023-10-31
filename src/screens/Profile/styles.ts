import styled from "styled-components/native";

export const Container = styled.View`
  background: #ffff;
  height: 100%;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;

export const ContainerAvatar = styled.View`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;

export const ICon = styled.View`
  background-color: #f1f1f1;
  border-radius: 100px;
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Name = styled.Text`
  color: #2c94f4;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Button = styled.Pressable``;

export const Button2 = styled.Pressable`
  position: absolute;
  bottom: 40px;
  width: 100%;
`;

export const TextEditFoto = styled.Text`
  text-decoration: underline;
  font-size: 16px;
  color: #002547;
`;

export const ContainerActions = styled.View`
  padding: 16px;
  margin-top: 32px;
`;

export const ActionPerfil = styled.Pressable`
  border-bottom-width: 2px;
  border-bottom-color: #f1f1f1;
  padding: 16px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextAction = styled.Text`
  font-size: 16px;
  color: #002547;
  font-weight: bold;
`;

export const Icone = styled.Image``;

export const TextLogout = styled.Text`
  color: #2c94f4;
  font-size: 16px;
  width: 100%;
  text-align: center;
`;
