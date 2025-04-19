import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../../assets/styles/Scaling";
import { getFontFamily } from "../../../assets/fonts/getFontFamily";
import Colors from "../../../assets/styles/Colors";

const styles = StyleSheet.create({
  selectTitle: {
    fontSize: scaleFontSize(25),
    fontFamily: getFontFamily("Roboto", "400"),
    marginTop: verticalScale(20),
    textAlign: "center",
  },
  hourListContainer: {
    flex: 1,
    marginTop: verticalScale(25),
    marginHorizontal: horizontalScale(30),
    paddingBottom: verticalScale(20),
  },
  hourContainer: {
    borderRadius: horizontalScale(6),
    borderWidth: horizontalScale(1.2),
    borderColor: Colors.blue,
    width: horizontalScale(110),
    height: verticalScale(30),
    alignItems: "center",
    justifyContent: "center",
  },
  flatListRow: {
    justifyContent: "space-between",
    marginBottom: verticalScale(25),
  },
});

export default styles;
