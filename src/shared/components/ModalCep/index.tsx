import React from "react";
import { Linking, Modal, Text } from "react-native";

import * as S from "./styles";
import Input from "../Input/Input";
import { Button } from "@components/Button";

const ModalCep = ({
  stateModal,
  updateState,
  nextScreen,
  cep,
  setCep,
}: any) => {
  const handleOpenSettings = () => {
    updateState();
    Linking.openSettings();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={stateModal}
      onRequestClose={updateState}
    >
      <S.BgModal />
      <S.Container>
        <S.ModalContainer>
          <S.WrapperButtonClose>
            <S.ButtonClose onPress={updateState}>
              <Text>❌</Text>
            </S.ButtonClose>
          </S.WrapperButtonClose>
          <S.ModalTitle>Informar cep</S.ModalTitle>
          <S.Divider />
          <S.ModalDescription>
            Para encontrar oficinas próximas informe o seu cep, ou libere acesso
            a sua localização
          </S.ModalDescription>
          <Input
            label=""
            placeholder="Digite o seu cep"
            value={cep}
            type="numeric"
            maxLength={8}
            minLength={8}
            onChangeText={(value: React.SetStateAction<string>) =>
              setCep(value)
            }
          />
          <S.Divider />
          <Button
            type="primary"
            isIcon
            text="Próximo"
            onPress={nextScreen}
            disabled={cep.length < 8}
            disable={cep.length < 8}
          />
          <S.Divider />
          <Button
            type="primary"
            text="Permitir acesso a localização"
            onPress={handleOpenSettings}
          />
        </S.ModalContainer>
      </S.Container>
    </Modal>
  );
};

export default ModalCep;
