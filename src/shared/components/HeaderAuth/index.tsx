import React from "react";
import { Container, Title, ButtonBack } from "./styles";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "@utils/theme";

const HeaderAuth: React.FC<{
  handlePressHeader?: () => void;
  title: string;
}> = ({ handlePressHeader, title }) => {
  return (
    <>
      <StatusBar style="dark" translucent={false} backgroundColor="#FFFf" />

      <Container>
        {handlePressHeader && (
          <ButtonBack onPress={handlePressHeader}>
            <MaterialIcons name="keyboard-arrow-left" size={32} color={theme.colors.primary} />
          </ButtonBack>
        )}
        <Title>{title}</Title>
      </Container>
    </>
  );
};

export default HeaderAuth;
