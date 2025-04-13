import { View, StyleSheet } from "react-native";
import { verticalScale } from "../assets/styles/Scaling";
import Colors from "../assets/styles/Colors";

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: verticalScale(0.5),
    width: "90%",
    backgroundColor: Colors.black,
    marginTop: verticalScale(20),
    alignSelf: "center",
  },
});

export default Divider;
