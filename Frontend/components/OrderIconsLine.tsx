import { View, StyleSheet } from "react-native";
import OptionIcon from "./OptionIcon";
import { horizontalScale, verticalScale } from "../assets/styles/Scaling";
import Colors from "../assets/styles/Colors";

type OrderIconsLineProps = {
  isFocus: string;
};

const OrderIconsLine = ({ isFocus }: OrderIconsLineProps) => {
  const icons: string[] = ["selectBarber", "selectDate", "bookBarber"];

  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <View style={styles.iconWrapper} key={icon}>
          <OptionIcon type={icon} isActive={isFocus == icon} />
          {index < icons.length - 1 && (
            <View style={styles.dotsContainer}>
              {Array.from({ length: 5 }, (_, index) => (
                <View key={index} style={styles.dot} />
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: verticalScale(15),
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    marginHorizontal: horizontalScale(6),
  },
  dot: {
    width: horizontalScale(3),
    height: horizontalScale(3),
    borderRadius: horizontalScale(1.5),
    backgroundColor: Colors.brightGray,
    marginHorizontal: horizontalScale(4),
  },
});

export default OrderIconsLine;
