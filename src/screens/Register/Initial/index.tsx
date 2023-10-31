import React from "react";
import { ScrollView, Pressable } from "react-native";

import Header from "@components/Header";
import Input from "@components/Input/Input";
import CheckBox from "@components/CheckBox";
import { Spinner } from "@components/Spinner";

import BottomSheetCustom from "../components/BottomSheetTerms";
import { SexoSelect } from "../components/SexoSelect";
import useFirstFormSignup from "./useFirstFormSignup";
import * as S from "./styles";
import { Button } from "@components/Button";

const Initial = () => {
  const {
    sendData,
    tel,
    valid,
    isLoading,
    isLoadingGetTerms,
    terms,
    nome,
    setNome,
    nascimento,
    setNascimento,
    email,
    setEmail,
    telefone,
    sexo,
    setSexo,
    termos,
    setTermos,
    setOpenModalTerms,
    openModalTerms,
    navigation,
  } = useFirstFormSignup();

  if (isLoadingGetTerms || isLoading) {
    return <Spinner />;
  }

  return (
    <S.Container>
      <Header title="Cadastrar" handlePressHeader={() => navigation.goBack()} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Wrapper>
          <S.Title>Vamos começar falando sobre você! ☺</S.Title>

          <Input
            label="Nome"
            placeholder="Digite o seu nome"
            value={nome}
            onChangeText={(value: React.SetStateAction<string>) =>
              setNome(value)
            }
          />

          <Input
            label="Data de nascimento"
            placeholder="Digite a sua data de nascimento"
            value={nascimento}
            type="numeric"
            maxLength={10}
            onChangeText={setNascimento}
          />

          <Input
            label="Email"
            placeholder="Digite o seu email"
            value={email}
            type="email-address"
            onChangeText={(value: React.SetStateAction<string>) =>
              setEmail(value)
            }
          />

          <Input
            label="Telefone"
            placeholder="Digite o seu telefone"
            value={telefone}
            type="phone-pad"
            maxLength={15}
            minLength={15}
            onChangeText={(value: React.SetStateAction<string>) => tel(value)}
          />

          <SexoSelect setSexo={setSexo} sexo={sexo} />

          <S.CheckGroup>
            <CheckBox
              handleSelect={() => setTermos(!termos)}
              selected={termos}
            />
            <S.CheckBoxContainerText>
              <S.LabelRadio>Aceito os</S.LabelRadio>
              <Pressable onPress={() => setOpenModalTerms(true)}>
                <S.TextLink>Termos de uso</S.TextLink>
              </Pressable>
            </S.CheckBoxContainerText>
          </S.CheckGroup>

          <Button
            text="Próximo"
            type="primary"
            isIcon
            onPress={sendData}
            disabled={!valid}
            disable={!valid}
          />
        </S.Wrapper>
      </ScrollView>

      <BottomSheetCustom
        visible={openModalTerms}
        terms={terms.data}
        setVisible={() => setOpenModalTerms(!openModalTerms)}
      />
    </S.Container>
  );
};

export default Initial;
