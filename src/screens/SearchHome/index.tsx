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

  function removerAcentos(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  useEffect(() => {
    setServiceList([]);
    if (search.length > 0) {
      const serviceFilter = services.filter((item) =>
        removerAcentos(item.nome.toLowerCase()).includes(removerAcentos(search.toLowerCase()))
      );
      setServiceList(serviceFilter);
    }
  }, [search]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Search onPress={() => navigation.goBack()}>
          <S.IconBack />
          <S.SearchInput
            onChangeText={setSearch}
            autoFocus
            testID="search"
            placeholder="Busque por serviços"
          />
        </S.Search>
        <ScrollView showsVerticalScrollIndicator={false}>
          {serviceList.length > 0 &&
            serviceList.map((item) => (
              <S.ButtonList
                key={Math.random().toString()}
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
