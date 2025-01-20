import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import React from "react";
import Colors from "../../styles";

interface ButtonProps {
  onPress: () => {};
  title: string;
  type: string;
}

export const CustomButton: any = ({ onPress, title, type }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        type === "primary"
          ? styles.PrimaryButtonContainer
          : styles.SecondaryButtonContainer
      }
    >
      <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  PrimaryButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  SecondaryButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  ButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
