import { StyleSheet } from "react-native";

const Colors = {
  primary: "#564154",
  secondary: "#FF6542",
};

const Style = StyleSheet.create({
  f1: "flex 1",
  f2: "flex 2",
  f3: "flex 3",

  row: { flexDirection: "row" },
  column: { flexDirection: "column" },
});

export default { Colors, Style };
