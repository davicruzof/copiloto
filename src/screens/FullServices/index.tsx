import React, { useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";

import * as S from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  CategoryResponse,
  ServiceRecommendResponseList,
  ServiceResponse,
} from "../../services/user/types";
import { useMutation } from "@tanstack/react-query";
import { getServicesRecommended } from "../../services/user/user";
import { ButtonNext } from "../../shared/components/ButtonNext";
import HeaderAuth from "../../shared/components/HeaderAuth";
import { Spinner } from "../../shared/components/Spinner";
import { ServiceWithCheckboxFullService } from "../../shared/components/ServiceWithCheckboxFullService";

const FullServices = () => {
  const route = useRoute();
  const params = route.params as {
    selectItem?: ServiceResponse;
    services: ServiceResponse[];
    categoryList: CategoryResponse[];
  };

  const [listSelections, setListSelections] = useState<any>([]);
  const navigation = useNavigation<any>();
  const [ativo, setAtivo] = useState("");
  const [services, setServices] = useState<ServiceResponse[]>([]);
  const [loadingImages, setLoadingImages] = useState(true);

  const { mutate: mutateGetServicesRecommended } = useMutation({
    mutationFn: (servicesIds: string[]) => getServicesRecommended(servicesIds),
    onSuccess: (data: ServiceRecommendResponseList) => {
      const recommend = data?.data;
      if (recommend && recommend.length > 0) {
        navigation.navigate("RecommendationService", {
          recommendServices: recommend,
        });
      } else {
        navigation.navigate("MapView");
      }
    },
    onError: () => {
      Alert.alert(
        "Copiloto",
        "Desculpe, estamos com problemas. Tente novamente mais tarde."
      );
    },
  });

  const activeItem = (item: CategoryResponse) => {
    if (listSelections.length > 0) {
      Alert.alert(
        "Copiloto",
        "Deseja realmente mudar de categoria? Todos as suas seleções serão desfeitas",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          { text: "Confirmar", onPress: () => handleChangeCategory(item) },
        ]
      );
    } else {
      handleChangeCategory(item);
    }
  };

  const handleChangeCategory = (item: CategoryResponse) => {
    setAtivo(item.nome);
    setListSelections([]);
    setServices(item?.services ? item.services : []);
  };

  const handleRecommendation = () => {
    mutateGetServicesRecommended(listSelections);
  };

  useEffect(() => {
    if (params?.selectItem) {
      let categoriaSelecionado: CategoryResponse | any;
      params.categoryList.filter((item) => {
        if (item.idCategoria === params.selectItem!.id_categoria) {
          categoriaSelecionado = item;
        }
      });
      handleChangeCategory(categoriaSelecionado);
      handleSelectService(params.selectItem);
    } else {
      handleChangeCategory(params.categoryList[0]);
    }
  }, []);

  const handleSelectService = (service: ServiceResponse) => {
    if (listSelections.includes(service.idservice)) {
      const auxServices: any = [];
      listSelections.map((item: any) => {
        item !== service.idservice && auxServices.push(item);
      });
      setListSelections(auxServices);
    } else {
      setListSelections([...listSelections, service.idservice]);
    }
  };

  return (
    <S.Background>
      <S.Container>
        <HeaderAuth
          title="Buscar"
          handlePressHeader={() => navigation.goBack()}
        />
        <S.Wrapper>
          <S.WrapperList>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {params.categoryList.length > 0 &&
                params.categoryList.map((item) => {
                  const isActive = ativo === item.nome;
                  return (
                    <S.CardContainer
                      key={item.nome}
                      onPress={() => activeItem(item)}
                    >
                      <S.CardContainerIcon isActive={isActive}>
                        <S.CardIcon
                          onLoadEnd={() => setLoadingImages(false)}
                          source={{
                            uri: isActive ? item.icon_white : item.icon_gray,
                          }}
                        />
                        {loadingImages && <Spinner />}
                      </S.CardContainerIcon>
                      <S.TitleCardCategoria isActive={isActive}>
                        {item.nome}
                      </S.TitleCardCategoria>
                    </S.CardContainer>
                  );
                })}
            </ScrollView>
          </S.WrapperList>
          <S.WrapperListServices>
            <ScrollView showsVerticalScrollIndicator={false}>
              {services.length > 0 &&
                services.map((item) => {
                  const isActive = listSelections.includes(item.idservice);
                  return (
                    <ServiceWithCheckboxFullService
                      title={item.nome}
                      key={item.nome}
                      isActive={isActive}
                      handleSelectService={() => handleSelectService(item)}
                    />
                  );
                })}
            </ScrollView>
          </S.WrapperListServices>
          <ButtonNext
            text="Confirmar dados"
            onPress={handleRecommendation}
            disable={listSelections.length === 0}
            disabled={listSelections.length === 0}
          />
        </S.Wrapper>
      </S.Container>
    </S.Background>
  );
};

export default FullServices;
