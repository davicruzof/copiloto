import React, { useContext } from "react";
import { Alert, ScrollView, View } from "react-native";

import { CardList } from "../CardList";
import { ButtonNext } from "../../../../shared/components/ButtonNext";
import { ButtonLigthDanger } from "../../../../shared/components/ButtonLigthDanger";
import { CardService } from "../CardService";
import { OrcamentoContext } from "../../../../contexts/orcamento";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

export const OrcamentoSection = ({ setTabActive, setTypeBottomSheet }: any) => {
  const navigation = useNavigation<any>();
  const { orcamento, setOrcamento } = useContext(OrcamentoContext);

  const toggleBottomNavigationView = () => {
    setOrcamento(null);
  };

  const orcamentoSize = orcamento !== null ? orcamento.length : 0;

  const selectedValues = `Solicitar orçamento(${orcamentoSize}/3)`;

  const addNewService = () => {
    setTabActive();
    setTypeBottomSheet("add");
  };

  const emptyService = (value: number) => {
    if (value === 0) {
      return;
    }

    let values: string[] = [];

    if (value === 3) {
      values = ["1", "2", "3"];
    }
    if (value === 2) {
      values = ["2", "3"];
    }
    if (value === 1) {
      values = ["3"];
    }

    return values.map((item, index) => {
      const textEmpty = `Escolher ${item} oficina`;
      return (
        <CardService
          key={item}
          isActive={index === 0}
          text={textEmpty}
          handlePress={addNewService}
        />
      );
    });
  };

  const sendNewOrcamento = () => {
    if (orcamentoSize > 0) {
      setOrcamento(null);
      Alert.alert("Copiloto", "Orcamento solicitado");
      navigation.navigate("home");
    }
  };

  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Title>
          Você pode escolher até 3 oficinas diferentes para cotação online!
        </S.Title>

        <View style={{ marginBottom: 32 }}>
          {orcamento
            ? orcamentoSize > 0 &&
              orcamento.map((item: any, index: any) => {
                return (
                  <CardList
                    disabled
                    key={index}
                    data={item}
                    handlePress={() => {}}
                  />
                );
              })
            : emptyService(3)}
          {orcamentoSize > 0 && emptyService(3 - orcamentoSize)}
        </View>

        <ButtonNext
          onPress={sendNewOrcamento}
          text={selectedValues}
          disable={orcamentoSize === 0}
        />
        <ButtonLigthDanger
          text="Desfazer"
          onPress={toggleBottomNavigationView}
        />
      </ScrollView>
    </S.Container>
  );
};
