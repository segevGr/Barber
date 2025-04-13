import { View, StyleSheet, ViewStyle } from "react-native";
import { ReactNode } from "react";
import { verticalScale, horizontalScale } from "../assets/styles/Scaling";
import Colors from "../assets/styles/Colors";

type GenericContainerProps = {
  children: ReactNode;
  style?: ViewStyle;
};

const GenericContainer = ({ children, style }: GenericContainerProps) => {
  return <View style={[styles.defaultStyle, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  defaultStyle: {
    marginTop: verticalScale(25),
    width: horizontalScale(300),
    height: verticalScale(320),
    borderRadius: horizontalScale(25),
    backgroundColor: Colors.brightWhite,
  },
});

export default GenericContainer;
