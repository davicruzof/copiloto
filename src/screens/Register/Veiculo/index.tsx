import { useNavigation, useRoute } from "@react-navigation/native";
import { getBrands, getModels } from "../../../services/fipe";
import { Drop } from "@components/Drop";
import Header from "@components/Header";
import Input from "@components/Input/Input";
import { Spinner } from "@components/Spinner";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ModalShow from "./components/ModalShow/Modal";
import * as S from "./style";
import { Button } from "@components/Button";

const RegisterVehicle = () => {
  const navigation = useNavigation<any>();
  const { params } = useRoute<any>();
  const idUser = params.idUser;

  const [ano, setAno] = useState("");
  const [valid, setValid] = useState(true);
  const [marcas, setMarcas] = useState([]);
  const [kmAtual, setKmAtual] = useState("");
  const [modelos, setModelos] = useState([]);
  const [marca, setMarca] = useState("Marca");
  const [kmRevisao, setKmRevisao] = useState("");
  const [modelo, setModelo] = useState("Modelo");
  const [marcasModal, setMarcasModal] = useState(false);
  const [modeloModal, setModeloModal] = useState(false);
  const [ultimaRevisao, setUltimaRevisao] = useState("");

  const { isLoading: loadingGetBrand } = useQuery({
    queryKey: ["getBrands"],
    queryFn: () => getBrands(),
    enabled: true,
    keepPreviousData: false,
    onSuccess: (data) => {
      if (data) {
        setMarcas(data);
      }
    },
  });

  const { mutate: refetchGetModels } = useMutation({
    mutationFn: (id: number) => getModels(id),
    onSuccess: (data) => {
      if (data) {
        setModelos(data);
      }
    },
  });

  //   useEffect(() => {
  //     mascaraData();
  //   }, [ultimaRevisao]);

  //   useEffect(() => {
  //     marca != "Marca" &&
  //     modelo != "Modelo" &&
  //     ano &&
  //     ultimaRevisao != "última revisão"
  //       ? setValid(false)
  //       : setValid(true);
  //   }, [marca, modelo, ano, ultimaRevisao]);

  const marcaSelecionada = (
    id: any,
    marcaSelect: React.SetStateAction<string>
  ) => {
    setMarcasModal(false);
    setMarca(marcaSelect);
    setModelo("Modelo");
    setModelos([]);
    refetchGetModels(id);
  };

  const modeloSelecionado = (
    id: any,
    modeloSelect: React.SetStateAction<string>
  ) => {
    setModeloModal(false);
    setModelo(modeloSelect);
  };

  const sendData = () => {
    let data = ultimaRevisao.split("/");

    const RegisterVehicle = {
      ultima_revisao: data,
      marca: marca,
      modelo: modelo,
      ano: ano,
      kmRevisao: kmRevisao ? kmRevisao : "vazio",
      kmAtual: kmAtual ? kmAtual : "vazio",
    };

    // direcionar para criar nova senha
  };

  function mascaraData() {
    var pass = ultimaRevisao;
    var expr = /[0123456789]/;
    let i = 0;
    for (i = 0; i < pass.length; i++) {
      var lchar = ultimaRevisao.charAt(i);
      var nchar = ultimaRevisao.charAt(i + 1);

      if (i == 0) {
        if (lchar.search(expr) != 0 || +lchar > 3) {
          setUltimaRevisao("Selecione uma data");
        }
      } else if (i == 1) {
        if (lchar.search(expr) != 0) {
          var tst1 = ultimaRevisao.substring(0, i);
          setUltimaRevisao(tst1);
          continue;
        }

        if (nchar != "/" && nchar != "") {
          var tst1 = ultimaRevisao.substring(0, i + 1);

          if (nchar.search(expr) != 0)
            var tst2 = ultimaRevisao.substring(i + 2, pass.length);
          else var tst2 = ultimaRevisao.substring(i + 1, pass.length);

          setUltimaRevisao(tst1 + "/" + tst2);
        }
      } else if (i == 4) {
        if (lchar.search(expr) != 0) {
          var tst1 = ultimaRevisao.substring(0, i);
          setUltimaRevisao(tst1);
          continue;
        }

        if (nchar != "/" && nchar != "") {
          var tst1 = ultimaRevisao.substring(0, i + 1);

          if (nchar.search(expr) != 0)
            var tst2 = ultimaRevisao.substring(i + 2, pass.length);
          else var tst2 = ultimaRevisao.substring(i + 1, pass.length);

          setUltimaRevisao(tst1 + "/" + tst2);
        }
      }

      if (i >= 6) {
        if (lchar.search(expr) != 0) {
          var tst1 = ultimaRevisao.substring(0, i);
          setUltimaRevisao(tst1);
        }
      }
    }

    if (pass.length > 10) setUltimaRevisao(ultimaRevisao.substring(0, 10));
  }

  if (loadingGetBrand) {
    return <Spinner />;
  }

  return (
    <S.Container>
      <Header title="Cadastrar" handlePressHeader={() => navigation.goBack()} />

      <S.Wrapper showsVerticalScrollIndicator={false}>
        <S.Title>Agora vamos falar sobre seu veículo!</S.Title>
        <Drop
          onPress={() => setMarcasModal(true)}
          label="Marca do veículo"
          value={marca}
          cor={marca != "Marca" && true}
        />

        <Drop
          onPress={() => setModeloModal(true)}
          label="Modelo do veículo"
          value={modelo}
          cor={modelo != "Modelo" && true}
        />

        <Input
          label="Ano"
          placeholder="ano"
          value={ano}
          type="numeric"
          maxLength={4}
          minLength={4}
          onChangeText={(value: React.SetStateAction<string>) => setAno(value)}
        />

        <Input
          label="Última revisão"
          placeholder="data da última revisão"
          value={ultimaRevisao}
          type="numeric"
          onChangeText={(value: React.SetStateAction<string>) =>
            setUltimaRevisao(value)
          }
        />

        <Input
          label="Quilometragem última revisão"
          placeholder="quilometragem"
          value={kmRevisao}
          onChangeText={(value: React.SetStateAction<string>) =>
            setKmRevisao(value)
          }
        />

        <Input
          label="Quilometragem atual"
          placeholder="quilometragem atual"
          value={kmAtual}
          onChangeText={(value: React.SetStateAction<string>) =>
            setKmAtual(value)
          }
        />

        <ModalShow
          modalShow={marcasModal}
          setModalShow={setMarcasModal}
          data={marcas}
          title="Selecione a marca do seu veículo"
          setSelection={marcaSelecionada}
        />

        <ModalShow
          modalShow={modeloModal}
          setModalShow={setModeloModal}
          data={modelos}
          title="Selecione o modelo do seu veículo"
          setSelection={modeloSelecionado}
        />

        <S.ContainerButton>
          <Button
            isIcon
            type="primary"
            text="Próximo"
            onPress={sendData}
            disable={valid}
            disabled={valid}
          />
          <S.Separet />
          <Button
            type="secondary"
            text="Pular"
            onPress={() => navigation.navigate("CreatePassword", { idUser })}
          />
        </S.ContainerButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default RegisterVehicle;
