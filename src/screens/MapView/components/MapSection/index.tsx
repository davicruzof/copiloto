import React from "react";

import { BottomSheetOffice } from "../BottomSheetOffice";
import SwitchView from "../SwitchView";

import { Spinner } from "@components/Spinner";
import * as S from "./styles";
import MapSectionViewModel from "./MapSection.viewModel";
import Map from "./components/Map";
import { CardList } from "../CardList";

export const MapSection = ({ typeBottomSheet, setTabActive }: any) => {
  const {
    orcamento,
    visible,
    viewActive,
    coordinates,
    setViewActive,
    servicesCompany,
    bottomSheetValue,
    mutateGetCompanyLoading,
    toggleBottomNavigationView,
  } = MapSectionViewModel();

  if (mutateGetCompanyLoading) {
    return <Spinner />;
  }

  const orcamentoList =
    (orcamento && orcamento.map((item: any) => item.title)) || [];

  let services = servicesCompany;

  if (orcamentoList.length > 0) {
    const aux = servicesCompany.filter(
      (item) => !orcamentoList.includes(item.title)
    );

    services = aux;
  }


  return (
    <>
      <SwitchView
        mapPermission={coordinates?.latitude ? true : false}
        active={viewActive}
        setActive={setViewActive}
      />

      {viewActive === "map" ? (
        coordinates &&
        services.length > 0 && (
          <Map
            coordenantes={coordinates}
            servicesCompany={services}
            toggleBottomNavigationView={toggleBottomNavigationView}
          />
        )
      ) : (
        <S.Container>
          <S.List showsVerticalScrollIndicator={false}>
            {services.map((item) => (
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
    </>
  );
};
