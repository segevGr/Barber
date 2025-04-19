import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from "../assets/styles/Scaling";
import { getFontFamily } from "../assets/fonts/getFontFamily";
import Colors from "../assets/styles/Colors";
import { ChooseHourStrings } from "../assets/strings/Strings";

type HoursContainerProps = {
  hour: string;
  availability: boolean;
};

const HoursContainer = ({ hour, availability }: HoursContainerProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.defaultContainer,
        borderColor: availability ? Colors.blue : Colors.red,
      }}
      activeOpacity={availability ? 0.2 : 1}
    >
      <Text
        style={{
          ...styles.defaultText,
          color: availability ? Colors.blue : Colors.red,
        }}
      >
        {availability ? hour : ChooseHourStrings.hourTaken}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultContainer: {
    borderRadius: horizontalScale(6),
    borderWidth: horizontalScale(1.2),
    borderColor: Colors.blue,
    width: horizontalScale(110),
    height: verticalScale(30),
    alignItems: "center",
    justifyContent: "center",
  },
  defaultText: {
    fontSize: scaleFontSize(20),
    fontFamily: getFontFamily("Roboto", "400"),
  },
});

export default HoursContainer;
