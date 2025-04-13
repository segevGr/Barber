import { ReactNode } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../assets/styles/Colors";
import { horizontalScale } from "../assets/styles/Scaling";

type GenericButtonProps = {
  buttonStyle: ViewStyle;
  onPress?: () => void;
  text: string;
  textStyle: TextStyle;
  isPressable?: boolean;
};

type GradientBackgroundProps = {
  children: ReactNode;
  style: ViewStyle;
};

const GradientBackground = ({ children, style }: GradientBackgroundProps) => {
  return (
    <LinearGradient
      colors={[Colors.red, Colors.blue]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
};

const GenericButton = ({
  buttonStyle,
  onPress,
  text,
  textStyle,
  isPressable = true,
}: GenericButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.baseBtn, buttonStyle, !isPressable && { opacity: 0.6 }]}
      onPress={onPress}
      disabled={!isPressable}
    >
      <Text style={[styles.baseText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: horizontalScale(100),
    padding: horizontalScale(2),
  },
  baseBtn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: horizontalScale(100),
  },
  baseText: {
    color: Colors.white,
  },
});

export { GradientBackground };
export default GenericButton;
