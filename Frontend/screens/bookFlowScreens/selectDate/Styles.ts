import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../../assets/styles/Scaling";
import { getFontFamily } from "../../../assets/fonts/getFontFamily";
import Colors from "../../../assets/styles/Colors";

const styles = StyleSheet.create({
  calendarContainer: {
    flex: 1,
  },
  calendar: {
    borderRadius: horizontalScale(25),
  },
  ticketsContainer: {
    paddingVertical: verticalScale(40),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(15),
  },
  ticketContainer: {
    height: verticalScale(22),
    width: horizontalScale(85),
    justifyContent: "center",
    borderRadius: horizontalScale(8),
    transform: [{ rotate: "-20deg" }],
  },
  ticketText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: scaleFontSize(15),
    fontFamily: getFontFamily("Roboto", "500"),
  },
});

export default styles;
