import React, { useEffect, useMemo, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { ButtonNext } from "../../../shared/components/ButtonNext";
import Header from "../../../shared/components/Header";
import Input from "../../../shared/components/Input/Input";
import { formatTelefone } from "../../../shared/utils/format";
import { SexoSelect } from "../components/SexoSelect";
import * as S from "./styles";
import CheckBox from "../../../shared/components/CheckBox";
import { ScrollView, TouchableOpacity } from "react-native";
import { signUpProps } from "../../../services/auth/types";
import { getTerms, signup } from "../../../services/auth/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ActivityIndicator, Alert } from "react-native";
import BottomSheetCustom from "../components/BottomSheetTerms";

const Initial = () => {
  const navigation = useNavigation<any>();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [termos, setTermos] = useState(false);
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState("Masculino");
  const [nascimento, setNascimento] = useState("");
  const [openModalTerms, setOpenModalTerms] = useState(false);

  const { data: terms, isLoading: isLoadingGetTerms } = useQuery({
    queryKey: ["todos"],
    queryFn: getTerms,
  });

  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: (formData: signUpProps) => signup(formData),
    onSuccess: (data) => {
      if (data.message === "Um código foi enviado para o seu e-mail") {
        Alert.alert("Copiloto", "Conta criada com sucesso!");
        navigation.navigate("Start");
      } else {
        Alert.alert("Copiloto", "Erro ao criar conta, tente novamente!");
      }
    },
    onError: () => {
      Alert.alert(
        "Copiloto",
        "Desculpe, estamos com problemas. Tente novamente mais tarde."
      );
    },
  });

  const valid = useMemo(() => {
    return nome && email && telefone.length == 15 && nascimento && termos;
  }, [nome, telefone, email, nascimento, sexo, nascimento, termos]);

  useEffect(() => {
    mascaraData();
  }, [nascimento]);

  function tel(valor: any) {
    setTelefone(formatTelefone(valor));
  }

  const sendData = () => {
    const dt_nascimentoFormat = nascimento.split("/", 3);

    const data = `${dt_nascimentoFormat[2]}-${dt_nascimentoFormat[1]}-${dt_nascimentoFormat[0]}`;

    const user: signUpProps = {
      data_nascimento: data,
      nome: nome,
      email: email,
      telefone: telefone,
      sexo: sexo,
    };

    signUp(user);
  };

  function mascaraData() {
    var pass = nascimento;
    var expr = /[0123456789]/;

    for (let i = 0; i < pass.length; i++) {
      var lchar = nascimento.charAt(i);
      var nchar = nascimento.charAt(i + 1);

      if (i == 3) {
        const tst1 = nascimento.substring(i + 1, pass.length);
        const tst2 = nascimento.substring(i, pass.length - 1);

        if (+tst2 === 1 && +tst1 > 2) {
          const tst1 = nascimento.substring(0, i + 1);
          setNascimento(tst1);
          continue;
        }
      }

      if (i == 0) {
        if (lchar.search(expr) != 0 || +lchar > 3) {
          setNascimento("Selecione uma data");
        }
      } else if (i == 1) {
        if (+nchar > 1) {
          var tst1 = nascimento.substring(0, i + 1);
          setNascimento(tst1);
          continue;
        }

        if (lchar.search(expr) != 0) {
          var tst1 = nascimento.substring(0, i);
          setNascimento(tst1);
          continue;
        }

        if (nchar != "/" && nchar != "") {
          var tst1 = nascimento.substring(0, i + 1);

          if (nchar.search(expr) != 0)
            var tst2 = nascimento.substring(i + 2, pass.length);
          else var tst2 = nascimento.substring(i + 1, pass.length);

          setNascimento(tst1 + "/" + tst2);
        }
      } else if (i == 4) {
        if (lchar.search(expr) != 0) {
          var tst1 = nascimento.substring(0, i);
          setNascimento(tst1);
          continue;
        }

        if (nchar != "/" && nchar != "") {
          var tst1 = nascimento.substring(0, i + 1);

          if (nchar.search(expr) != 0)
            var tst2 = nascimento.substring(i + 2, pass.length);
          else var tst2 = nascimento.substring(i + 1, pass.length);

          setNascimento(tst1 + "/" + tst2);
        }
      }

      if (i >= 6) {
        if (lchar.search(expr) != 0) {
          var tst1 = nascimento.substring(0, i);
          setNascimento(tst1);
        }
      }
    }

    if (pass.length > 10) setNascimento(nascimento.substring(0, 10));
  }

  if (isLoadingGetTerms || isLoading) {
    return <ActivityIndicator />;
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
              <TouchableOpacity onPress={() => setOpenModalTerms(true)}>
                <S.TextLink>Termos de uso</S.TextLink>
              </TouchableOpacity>
            </S.CheckBoxContainerText>
          </S.CheckGroup>

          <ButtonNext
            text="Próximo"
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
