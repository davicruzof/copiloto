import React from "react";
import { CategoryResponse } from "@services/user/types";
import { ScrollView } from "react-native";

import * as S from './styles';

const ListCategories: React.FC<{
    categoryList: CategoryResponse[];
    activeItem: (item: CategoryResponse) => void;
    active: string;
}> = ({ categoryList, activeItem, active }) => {

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categoryList.map((item) => {
        const isActive = active === item.nome;
        return (
          <S.Category key={item.nome} onPress={() => activeItem(item)}>
            <S.IconWrapper isActive={isActive}>
              <S.CategoryIcon
                source={{
                  uri: isActive ? item.icon_white : item.icon_gray,
                }}
              />
            </S.IconWrapper>
            <S.CategoryTitle isActive={isActive}>
              {item.nome}
            </S.CategoryTitle>
          </S.Category>
        );
      })}
    </ScrollView>
  );
};

export default ListCategories;
