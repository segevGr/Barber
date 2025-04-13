import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../../assets/styles/Scaling";
import { getFontFamily } from "../../../assets/fonts/getFontFamily";
import Colors from "../../../assets/styles/Colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  chooseBarberTitle: {
    fontSize: scaleFontSize(35),
    fontFamily: getFontFamily("Roboto", "400"),
    textAlign: "center",
    marginVertical: verticalScale(15),
  },
  barberContainer: {
    marginTop: 0,
    alignItems: "center",
    height: verticalScale(200),
    width: horizontalScale(200),
    shadowColor: Colors.grey,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  barberName: {
    fontSize: scaleFontSize(30),
    fontFamily: getFontFamily("Roboto", "300"),
    textAlign: "center",
    marginVertical: verticalScale(20),
  },
  barberImage: {
    height: horizontalScale(130),
    width: horizontalScale(130),
  },
});

export default styles;
