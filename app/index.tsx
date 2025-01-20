import { Text, View } from "react-native";
import WorkoutLog from "./components/WorkoutLog";
import NewWorkout from "./components/NewWorkout";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <WorkoutLog /> */}
      <NewWorkout />
    </View>
  );
}
