import { StyleSheet } from "react-native";
import Colors from "./Colors";

const GlobalStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  greyBackground: {
    flex: 1,
    backgroundColor: Colors.grey,
    alignItems: "center",
  },
});

export default GlobalStyles;
