import React, { useContext, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { CardList } from "../CardList";
import { ButtonNext } from "../../../../shared/components/ButtonNext";
import { ButtonLigthDanger } from "../../../../shared/components/ButtonLigthDanger";
import { CardService } from "../CardService";
import { OrcamentoContext } from "../../../../contexts/orcamento";
import { useNavigation } from "@react-navigation/native";

export const OrcamentoSection = () => {
  const navigation = useNavigation<any>();

  const { orcamento, setOrcamento } = useContext(OrcamentoContext);

  const toggleBottomNavigationView = () => {
    setOrcamento(null);
  };

  const orcamentoSize = orcamento !== null ? orcamento.length : 0;

  const selectedValues = `Solicitar orçamento(${orcamentoSize}/3)`;

  const addNewService = () => {
    navigation.navigate("MapView", { typeBottomSheet: "add" });
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

  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: "rgba(134,197,255,0.1)",
        paddingTop: 26,
        height: "100%",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            color: "#002547",
            fontFamily: "Jost_500Medium",
            fontSize: 14,
            textAlign: "center",
            marginBottom: 22,
          }}
        >
          Você pode escolher até 3 oficinas diferentes para cotação online!
        </Text>

        <View style={{ marginBottom: 32 }}>
          {orcamento
            ? orcamentoSize > 0 &&
              orcamento.map(
                (item: any, index: React.Key | null | undefined) => {
                  return (
                    <CardList
                      disabled
                      key={index}
                      data={item}
                      handlePress={() => {}}
                    />
                  );
                }
              )
            : emptyService(3)}
          {orcamentoSize > 0 && emptyService(3 - orcamentoSize)}
        </View>

        <ButtonNext text={selectedValues} disable={false} />
        <ButtonLigthDanger
          text="Desfazer"
          onPress={toggleBottomNavigationView}
        />
      </ScrollView>
    </View>
  );
};