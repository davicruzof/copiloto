import React, { useContext } from "react";
import { Alert, Image, View } from "react-native";

import * as S from "./styles";

import { ButtonLigthDanger } from "@components/ButtonLigthDanger";
import { BottomSheet } from "react-native-btr";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { OrcamentoContext } from "@contexts/orcamento";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@components/Button";
import { ServicesSelectedContext } from "@contexts/servicesSelected";
import { createSchedule } from "@services/schedule/schedule";
import { CreateSchedule } from "@services/schedule/types";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "@components/Spinner";
import { ServicesRecommendationSelectedContext } from "@contexts/servicesRecommendationSelected";

export const BottomSheetOffice: React.FC<{
  visible: boolean;
  setVisible: any;
  data: any;
  type: string;
  setTabActive: () => void;
}> = ({ visible, setVisible, data, type, setTabActive }) => {
  const navigation = useNavigation<any>();
  const { bottom } = useSafeAreaInsets();

  const { setOrcamento } = useContext(OrcamentoContext);
  const { servicesSelected } = useContext(ServicesSelectedContext);
  const { servicesRecommendationSelected } = useContext(
    ServicesRecommendationSelectedContext
  );

  const { mutate: mutateCreateSchedule, isLoading } = useMutation({
    mutationFn: (servicesIds: CreateSchedule) => createSchedule(servicesIds),
    onSuccess: (data) => {
      if (data.success) {
        Alert.alert("Copiloto", data.message);
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

  const handleAddService = (id: string) => {
    setOrcamento((old: any) => (old !== null ? [...old, data] : [data]));
    setTabActive();
    setVisible();
  };

  const sendNewOrcamento = (id: string) => {
    const orcamento: CreateSchedule = {
      companies: [id],
      services: [...servicesSelected, ...servicesRecommendationSelected],
      id_vehicle: 1,
    };

    mutateCreateSchedule(orcamento);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <BottomSheet visible={visible} onBackButtonPress={setVisible}>
      <S.Container bottom={bottom}>
        <S.Header>
          <Image
            source={{ uri: data?.company_image }}
            style={{
              width: 64,
              height: 59.12,
              borderRadius: 5.42373,
              borderColor: "#c4c4c4",
              borderWidth: 1,
              marginRight: 16,
            }}
          />
          <View>
            <S.HeaderInfoContainer>
              <S.Title>{data?.title}</S.Title>
              {data?.rating && (
                <S.InfoContainer>
                  <AntDesign name="star" size={16} color="#2C94F4" />
                  <S.TextInfo>{data.rating}</S.TextInfo>
                </S.InfoContainer>
              )}
            </S.HeaderInfoContainer>
            <S.LocationContainer>
              <S.InfoContainer>
                <FontAwesome5 name="map-marker-alt" size={16} color="#2C94F4" />
                <S.TextInfo>
                  {parseFloat(data.distance).toFixed(2)}m distante
                </S.TextInfo>
              </S.InfoContainer>
              {Boolean(data.isHouse) && (
                <S.InfoContainer>
                  <AntDesign name="home" size={16} color="black" />
                  <S.TextInfo>Atende a domicílio</S.TextInfo>
                </S.InfoContainer>
              )}
            </S.LocationContainer>
          </View>
        </S.Header>
        <S.DividerLine />
        <Button
          type="primary"
          isIcon
          text={type === "add" ? "Incluir para orçamento" : "Agendar agora"}
          onPress={() =>
            type === "add"
              ? handleAddService(data?.id_company)
              : sendNewOrcamento(data?.id_company)
          }
          disable={false}
        />
        {type !== "add" && (
          <Button
            type="secondary"
            isIcon
            text="Solicitar orçamento"
            onPress={() => handleAddService(data?.id_company)}
          />
        )}
        <ButtonLigthDanger text="fechar" onPress={setVisible} />
      </S.Container>
    </BottomSheet>
  );
};
