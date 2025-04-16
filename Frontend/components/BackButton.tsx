import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { horizontalScale, verticalScale } from "../assets/styles/Scaling";
import Colors from "../assets/styles/Colors";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}
    >
      <FontAwesome
        name="arrow-left"
        size={horizontalScale(28)}
        color={Colors.white}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: verticalScale(35),
    left: horizontalScale(20),
  },
});

export default BackButton;
