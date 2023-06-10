import React from "react";
import { Container, Title, ButtonBack } from "./styles";
import icon from "../../../assets/arrow.png";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";

const HeaderAuth = ({ handlePressHeader, title }) => {
  return (
    <>
      <StatusBar style="dark" translucent={false} backgroundColor="#FFFf" />

      <Container>
        <ButtonBack onPress={handlePressHeader}>
          <Image source={icon} />
        </ButtonBack>
        <Title>{title}</Title>
      </Container>
    </>
  );
};

export default HeaderAuth;
