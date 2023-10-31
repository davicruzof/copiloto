import React from "react";
import { Modal } from "react-native";

import * as S from "./styles";
import { Button } from "@components/Button";

const RecommendationServiceModal = ({
  modalVisible,
  setModalVisible,
  title,
  content,
}: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <S.ContainerModalBackground>
        <S.ContainerModal>
          <S.TitleModal>{title}</S.TitleModal>
          <S.ContentModal>{content}</S.ContentModal>
          <Button
            type="primary"
            text="Ok, entendi!"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </S.ContainerModal>
      </S.ContainerModalBackground>
    </Modal>
  );
};

export default RecommendationServiceModal;
