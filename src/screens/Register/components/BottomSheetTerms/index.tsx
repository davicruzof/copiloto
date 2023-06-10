import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import { ButtonLigthDanger } from "../../../../shared/components/ButtonLigthDanger";
import { BottomSheet } from "react-native-btr";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("screen");

const BottomSheetCustom = ({ visible, setVisible, terms }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <BottomSheet visible={visible} onBackButtonPress={setVisible}>
      <View style={[styles.contentContainer, { paddingBottom: bottom + 12 }]}>
        <ScrollView>
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>{terms}</Text>
          </View>
        </ScrollView>

        <ButtonLigthDanger text="fechar" onPress={setVisible} />
      </View>
    </BottomSheet>
  );
};

export default BottomSheetCustom;

const styles = StyleSheet.create({
  contentContainer: {
    minHeight: 300,
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
