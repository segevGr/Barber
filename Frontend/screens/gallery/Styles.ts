import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/Scaling";

const styles = StyleSheet.create({
  containerStyle: {
    height: "100%",
    width: "100%",
  },
  flatListContainer: {
    paddingBottom: verticalScale(150),
  },
  imageContainer: {
    flex: 1,
    marginHorizontal: horizontalScale(12),
    marginVertical: verticalScale(12),
    width: horizontalScale(150),
    height: horizontalScale(150),
  },

  image: {
    height: "100%",
    width: "100%",
    borderRadius: horizontalScale(8),
  },
});

export default styles;
