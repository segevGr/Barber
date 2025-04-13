import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { horizontalScale } from "../assets/styles/Scaling";
import Colors from "../assets/styles/Colors";

const CheckBox = ({ isActive = false, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.checkbox, isActive && styles.inactive]}
      activeOpacity={1}
      onPress={onPress}
    >
      {isActive && (
        <FontAwesome
          name="check"
          size={horizontalScale(18)}
          color={Colors.white}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    borderColor: Colors.white,
    borderWidth: horizontalScale(1),
    borderRadius: horizontalScale(3),
    height: horizontalScale(21),
    width: horizontalScale(21),
    marginRight: horizontalScale(14),
    alignItems: "center",
    justifyContent: "center",
  },
  inactive: {
    backgroundColor: Colors.red,
    borderWidth: 0,
  },
});

export default CheckBox;
