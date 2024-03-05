import React, { useContext } from "react";
import { Alert, ScrollView } from "react-native";

import { CardList } from "../CardList";
import { ButtonLigthDanger } from "@components/ButtonLigthDanger";
import { CardService } from "../CardService";
import { IOrcamentoContext, OrcamentoContext } from "@contexts/orcamento";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { Button } from "@components/Button";
import { useMutation } from "@tanstack/react-query";
import { createSchedule } from "@services/schedule/schedule";
import { CreateSchedule } from "@services/schedule/types";
import { ServicesSelectedContext } from "@contexts/servicesSelected";
import { Spinner } from "@components/Spinner";
import { ServicesRecommendationSelectedContext } from "@contexts/servicesRecommendationSelected";

export const OrcamentoSection = ({ setTabActive, setTypeBottomSheet }: any) => {
  const navigation = useNavigation<any>();
  const { orcamento, setOrcamento } = useContext(OrcamentoContext);
  const { servicesSelected, setServicesSelected } = useContext(
    ServicesSelectedContext
  );
  const { servicesRecommendationSelected } = useContext(
    ServicesRecommendationSelectedContext
  );

  const toggleBottomNavigationView = () => {
    setOrcamento(null);
  };

  const orcamentoSize = orcamento !== null ? orcamento.length : 0;

  const selectedValues = `Solicitar orçamento(${orcamentoSize}/3)`;

  const { mutate: mutateCreateSchedule, isLoading } = useMutation({
    mutationFn: (servicesIds: CreateSchedule) => createSchedule(servicesIds),
    onSuccess: (data) => {
      if (data.success) {
        Alert.alert("Copiloto", data.message);
        setOrcamento(null);
        setServicesSelected([]);
        navigation.navigate("home");
      }
    },
    onError: () => {
      Alert.alert(
        "Copiloto",
        "Desculpe, estamos com problemas. Tente novamente mais tarde."
      );
    },
  });

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
    if (!orcamento) {
      return;
    }

    const servicesCompanies = orcamento.map(
      (item: IOrcamentoContext) => item.id_company
    );

    const orcamentoSend: CreateSchedule = {
      companies: servicesCompanies,
      services: [...servicesSelected, ...servicesRecommendationSelected],
      id_vehicle: 1,
    };

    mutateCreateSchedule(orcamentoSend);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Title>
          Você pode escolher até 3 oficinas diferentes para cotação online!
        </S.Title>

        <S.WrapperOptions>
          {orcamento
            ? orcamentoSize > 0 &&
              orcamento.map((item: any, index: any) => {
                return (
                  <CardList key={index} data={item} handlePress={() => {}} />
                );
              })
            : emptyService(3)}
          {orcamentoSize > 0 && emptyService(3 - orcamentoSize)}
        </S.WrapperOptions>

        <Button
          type="primary"
          isIcon
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
