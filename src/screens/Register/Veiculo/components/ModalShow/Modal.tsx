import React from "react";
import { FlatList, Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";

const ModalShow = ({ modalShow, setModalShow, data, title, setSelection }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalShow}
      onRequestClose={() => {
        setModalShow(false);
      }}
    >
      <S.Container>
        <S.Header>
          <S.ButtonClose onPress={() => setModalShow(false)}>
            <AntDesign name="close" size={24} color="black" />
          </S.ButtonClose>
        </S.Header>
        <S.Title>{title}</S.Title>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <S.ButtonSelection
                key={item.code}
                onPress={() => setSelection(item.code, item.name)}
              >
                <S.ButtonText>{item.name}</S.ButtonText>
              </S.ButtonSelection>
            );
          }}
          keyExtractor={(item) => item.code}
        />
      </S.Container>
    </Modal>
  );
};

export default ModalShow;
