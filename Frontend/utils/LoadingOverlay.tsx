import { View, ActivityIndicator, Text, StyleSheet } from "react-native";

import { scaleFontSize, verticalScale } from "../assets/styles/Scaling";
import { GeneralStrings } from "../assets/strings/Strings";

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
      <Text style={styles.text}>{GeneralStrings.pleaseWait}</Text>
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "white",
  },
  text: {
    marginTop: verticalScale(8),
    fontSize: scaleFontSize(18),
  },
});
