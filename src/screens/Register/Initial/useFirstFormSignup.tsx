import { useEffect, useMemo, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { formatTelefone } from "../../../shared/utils/format";
import { signUpProps } from "../../../services/auth/types";
import { getTerms, signup } from "../../../services/auth/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Alert } from "react-native";

const useFirstFormSignup = () => {
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
      Alert.alert("Copiloto", data.message);
      if (data.success && data.idUser) {
        navigation.navigate("ValidateRegister", { idUser: data.idUser });
      } else {
        navigation.navigate("SignIn");
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

  useEffect(() => {
    mascaraData();
  }, [nascimento]);

  return {
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
  };
};

export default useFirstFormSignup;
