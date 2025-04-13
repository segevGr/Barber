import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/Scaling";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import Colors from "../../assets/styles/Colors";

const styles = StyleSheet.create({
  noReservationContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(80),
  },
  noReservationText: {
    fontSize: scaleFontSize(65),
    fontFamily: getFontFamily("Roboto", "600"),
    color: Colors.brightWhite,
    textAlign: "center",
  },
  bookButtonContainer: {
    marginTop: verticalScale(15),
  },
  reserveButton: {
    height: verticalScale(35),
    width: horizontalScale(200),
  },
  reserveText: {
    fontSize: scaleFontSize(28),
    fontFamily: getFontFamily("Roboto", "400"),
  },
  barberDetailsContainer: {
    height: verticalScale(75),
    marginHorizontal: horizontalScale(20),
    borderWidth: horizontalScale(1),
    borderColor: Colors.blackOpacity,
    borderRadius: horizontalScale(6),
    marginTop: verticalScale(15),
    alignSelf: "center",
    flexDirection: "row-reverse",
  },
  image: {
    height: "100%",
    width: horizontalScale(75),
    borderRadius: horizontalScale(6),
  },
  barberDetails: {
    marginRight: horizontalScale(10),
    marginTop: verticalScale(3),
    width: horizontalScale(110),
  },
  barberName: {
    fontSize: scaleFontSize(22),
    fontFamily: getFontFamily("Roboto", "400"),
    textAlign: "right",
  },
  barberAddress: {
    fontSize: scaleFontSize(15),
    fontFamily: getFontFamily("Roboto", "300"),
    marginVertical: verticalScale(4),
    textAlign: "right",
    flexWrap: "wrap",
  },
  callButton: {
    backgroundColor: Colors.brightBlue,
    height: verticalScale(20),
    borderRadius: horizontalScale(4),
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(7),
  },
  callButtonText: {
    fontSize: scaleFontSize(17),
    fontFamily: getFontFamily("Roboto", "300"),
    marginVertical: verticalScale(3),
    color: Colors.white,
    textAlign: "right",
  },
  callIcon: {
    fontSize: scaleFontSize(22),
  },
  barberIcons: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  mustacheImage: {
    width: horizontalScale(47),
    height: verticalScale(13),
  },
  scissorsImage: {
    width: horizontalScale(30),
    height: verticalScale(30),
  },
  detailsContainer: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(15),
  },
  subTitle: {
    fontSize: scaleFontSize(22),
    fontFamily: getFontFamily("Roboto", "600"),
    textAlign: "right",
    marginBottom: verticalScale(5),
  },
  timeDetails: {
    fontSize: scaleFontSize(19),
    fontFamily: getFontFamily("Roboto", "400"),
    textAlign: "right",
  },
  priceContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  cancelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(15),
  },
  cancelText: {
    fontSize: scaleFontSize(19),
    fontFamily: getFontFamily("Roboto", "500"),
    marginHorizontal: horizontalScale(5),
    color: Colors.red,
  },
  cancelIcon: {
    fontSize: scaleFontSize(19),
  },
});

export default styles;
