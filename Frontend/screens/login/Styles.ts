import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/Scaling";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import Colors from "../../assets/styles/Colors";

const styles = StyleSheet.create({
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    borderColor: "#AF2413",
    borderWidth: horizontalScale(3),
    borderRadius: horizontalScale(6),
    height: verticalScale(148),
    width: horizontalScale(233),
    marginTop: verticalScale(70),
    marginLeft: horizontalScale(35),
    justifyContent: "flex-start",
  },
  barbershopName: {
    fontSize: scaleFontSize(38),
    fontFamily: getFontFamily("TheGirlNextDoor"),
    color: Colors.white,
    letterSpacing: horizontalScale(32) * 0.025,
    marginTop: verticalScale(-23),
    textAlign: "center",
  },
  title: {
    fontSize: scaleFontSize(60),
    fontFamily: getFontFamily("Roboto", "500"),
    color: Colors.brightWhite,
    marginLeft: horizontalScale(16.5),
    letterSpacing: horizontalScale(32) * 0.025,
    lineHeight: horizontalScale(45),
    marginTop: horizontalScale(10),
  },
  inputsContainer: {
    flex: 1,
    alignItems: "center",
  },
  loginButton: {
    marginTop: verticalScale(45),
    height: verticalScale(44),
    width: horizontalScale(304),
    borderWidth: horizontalScale(1),
    borderColor: Colors.white,
    backgroundColor: Colors.red,
  },
  loginText: {
    fontSize: scaleFontSize(32),
    fontFamily: getFontFamily("Roboto", "500"),
  },
});

export default styles;
