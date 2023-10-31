import React, { Suspense } from "react";

import { BottomSheetOffice } from "../BottomSheetOffice";
import { CardList } from "../CardList";
import SwitchView from "../SwitchView";

import { Spinner } from "@components/Spinner";
import * as S from "./styles";
import MapSectionViewModel from "./MapSection.viewModel";
import Map from "./components/Map";

export const MapSection = ({ typeBottomSheet, setTabActive }: any) => {
  const {
    visible,
    viewActive,
    params,
    setViewActive,
    servicesCompany,
    bottomSheetValue,
    toggleBottomNavigationView,
  } = MapSectionViewModel();


  return (
    <Suspense fallback={<Spinner />}>
      <SwitchView
        mapPermission={params.coordinates!!}
        active={viewActive}
        setActive={setViewActive}
      />

      {viewActive === "map" ? (
        params.coordinates &&
        servicesCompany.length > 0 && (
          <Map
            coordenantes={params.coordinates}
            servicesCompany={servicesCompany}
            toggleBottomNavigationView={toggleBottomNavigationView}
          />
        )
      ) : (
        <S.Container>
          <S.List showsVerticalScrollIndicator={false}>
            {servicesCompany.map((item: any) => (
              <CardList
                data={item}
                key={item.id_company}
                handlePress={() => toggleBottomNavigationView(item)}
              />
            ))}
          </S.List>
        </S.Container>
      )}

      <BottomSheetOffice
        type={typeBottomSheet}
        visible={visible}
        data={bottomSheetValue}
        setVisible={toggleBottomNavigationView}
        setTabActive={setTabActive}
      />
    </Suspense>
  );
};
