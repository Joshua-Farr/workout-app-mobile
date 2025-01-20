import { StyleSheet, Button, View, Text, Alert } from "react-native";
import React from "react";
import { CustomButton } from "./ui-components/CustomButton";

export default function WorkoutLog() {
  const Separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Log Empty:</Text>
      <View style={styles.buttonWrapper}>
        <CustomButton
          title="Start New Workout"
          type="primary"
          onPress={() => Alert.alert("New workout button pressed!")}
        />
        <Separator />

        <CustomButton
          title="Copy Previous Workout"
          type="primary"
          onPress={() => Alert.alert("Copy previous workout button pressed!")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 28 },
  buttonWrapper: { marginTop: 100 },

  button: {
    borderRadius: 10,
  },

  separator: {
    marginVertical: 20,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
