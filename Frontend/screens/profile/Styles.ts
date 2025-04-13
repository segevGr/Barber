import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/Scaling";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import Colors from "../../assets/styles/Colors";

const styles = StyleSheet.create({
  title: {
    fontSize: scaleFontSize(45),
    fontFamily: getFontFamily("Roboto", "500"),
    marginTop: horizontalScale(20),
    textAlign: "center",
  },
  inputsContainer: {
    alignItems: "center",
  },
  notificationContainer: {
    width: horizontalScale(250),
    marginTop: verticalScale(15),
    flexDirection: "row",
    alignItems: "center",
  },
  notificationText: {
    fontSize: scaleFontSize(25),
    fontFamily: getFontFamily("Roboto", "500"),
    marginHorizontal: horizontalScale(15),
  },
  notificationIcon: {
    fontSize: scaleFontSize(35),
  },
  saveChangeContainer: {
    marginTop: verticalScale(15),
  },
  saveChangesButton: {
    height: verticalScale(35),
    width: horizontalScale(200),
  },
  saveChangesText: {
    fontSize: scaleFontSize(28),
    fontFamily: getFontFamily("Roboto", "400"),
  },

  logoutContainer: {
    marginTop: verticalScale(45),
    marginBottom: verticalScale(15),
    marginLeft: horizontalScale(20),
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    fontSize: scaleFontSize(25),
    fontFamily: getFontFamily("Roboto", "500"),
    marginHorizontal: horizontalScale(8),
    color: Colors.red,
  },
  logoutIcon: {
    fontSize: scaleFontSize(30),
  },
});

export default styles;
