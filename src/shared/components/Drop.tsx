import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import icon from "../../assets/arrow_select.png";

export const Drop = ({ value, cor, label, ...props }) => {
  return (
    <>
      <Text
        style={{
          fontSize: 16,
          color: "#002547",
          marginBottom: 12,
        }}
      >
        {label}
      </Text>
      <TouchableOpacity
        {...props}
        style={{
          height: 45,
          borderWidth: 2,
          borderColor: "#AEBECC",
          borderRadius: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          marginBottom: 22,
        }}
      >
        <Text style={{ color: cor ? "#002547" : "#AEBECC" }}>{value}</Text>
        <Image source={icon} />
      </TouchableOpacity>
    </>
  );
};
