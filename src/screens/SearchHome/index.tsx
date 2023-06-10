import React, { useEffect, useState } from "react";

import * as S from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CategoryResponse, ServiceResponse } from "../../services/user/types";
import { ScrollView } from "react-native";

const SearchHome = () => {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const [search, setSearch] = useState("");
  const [serviceList, setServiceList] = useState<ServiceResponse[]>([]);
  const { services, categoryList } = route.params as {
    services: ServiceResponse[];
    categoryList: CategoryResponse[];
  };

  useEffect(() => {
    setServiceList([]);
    if (search) {
      const serviceAux = [];
      services.map((item) => {
        if (item?.nome.toLowerCase().includes(search.toLowerCase())) {
          serviceAux.push(item);
        }
      });
      setServiceList(serviceAux);
    }
  }, [search]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Search onPress={() => navigation.goBack()}>
          <S.IconBack />
          <S.SearchInput
            onChangeText={setSearch}
            placeholder="Busque por serviços"
          />
        </S.Search>
        <ScrollView showsVerticalScrollIndicator={false}>
          {serviceList.length > 0 &&
            serviceList.map((item) => (
              <S.ButtonList
                key={item.nome}
                onPress={() => {
                  navigation.navigate("FullServices", {
                    services,
                    categoryList,
                    selectItem: item,
                  });
                }}
              >
                <S.TextButton>{item.nome}</S.TextButton>
              </S.ButtonList>
            ))}
        </ScrollView>
      </S.Wrapper>
    </S.Container>
  );
};

export default SearchHome;
