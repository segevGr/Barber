import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/Scaling";
import Colors from "../../assets/styles/Colors";
import { getFontFamily } from "../../assets/fonts/getFontFamily";

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: verticalScale(25),
  },
  barberImage: {
    borderTopLeftRadius: horizontalScale(35),
    borderTopRightRadius: horizontalScale(35),
    width: horizontalScale(300),
    height: verticalScale(200),
  },
  detailsContainer: {
    width: horizontalScale(300),
    height: verticalScale(135),
    backgroundColor: Colors.brightWhite,
    alignItems: "flex-end",
    padding: horizontalScale(10),
  },
  title: {
    fontSize: scaleFontSize(25),
    fontFamily: getFontFamily("Roboto", "600"),
  },
  address: {
    fontSize: scaleFontSize(20),
    fontFamily: getFontFamily("Roboto", "200"),
  },
  workHours: {
    fontSize: scaleFontSize(20),
    fontFamily: getFontFamily("Roboto", "400"),
    marginVertical: verticalScale(3),
  },
  bookButtonContainer: {
    marginTop: verticalScale(10),
    alignSelf: "center",
  },
  BookButton: {
    height: verticalScale(35),
    width: horizontalScale(200),
  },
  bookText: {
    fontSize: scaleFontSize(28),
    fontFamily: getFontFamily("Roboto", "400"),
  },
  scissorsImage: {
    position: "absolute",
    height: verticalScale(95),
    width: horizontalScale(100),
    alignSelf: "flex-start",
    marginTop: verticalScale(160),
    marginLeft: horizontalScale(-23),
  },
});

export default styles;
