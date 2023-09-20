import React from "react";
import { Container, Title, ButtonBack } from "./styles";
import icon from "../../../assets/arrow.png";
import { Image, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Header = ({ handlePressHeader, title }) => {
  return (
    <View style={{ paddingTop: 16, backgroundColor: "#fff" }}>
      <StatusBar translucent={true} />
      <Container>
        <ButtonBack onPress={handlePressHeader}>
          <Image source={icon} />
        </ButtonBack>
        <Title>{title}</Title>
      </Container>
    </View>
  );
};

export default Header;
