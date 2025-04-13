import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../assets/styles/Scaling";
import { getFontFamily } from "../assets/fonts/getFontFamily";
import Colors from "../assets/styles/Colors";
import { TabsStrings } from "../assets/strings/Strings";

type OptionIconProps = {
  type: string;
  isInTabs?: boolean;
  isActive?: boolean;
  onPress?: () => void;
};

const fieldConfig = {
  ["home"]: { icon: "home", text: TabsStrings.home },
  ["profile"]: { icon: "user", text: TabsStrings.profile },
  ["gallery"]: { icon: "camera", text: TabsStrings.gallery },
  ["reservations"]: { icon: "scissors", text: TabsStrings.reservations },
  ["selectBarber"]: { icon: "scissors" },
  ["selectDate"]: { icon: "calendar" },
  ["bookBarber"]: { icon: "check" },
};

const OptionIcon = ({
  type,
  isInTabs = false,
  isActive = false,
  onPress,
}: OptionIconProps) => {
  const { icon, text = null } = fieldConfig[type] || {
    icon: "question",
    text: null,
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={isInTabs ? 0.3 : 1}
    >
      <FontAwesome
        name={icon}
        size={horizontalScale(33)}
        color={isActive ? Colors.white : Colors.red}
        style={icon === "scissors" ? styles.rotate : null}
      />
      {isInTabs && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily("Roboto", "500"),
    color: Colors.brightWhite,
    marginTop: verticalScale(3),
  },
  rotate: {
    transform: [{ rotate: "-90deg" }],
  },
});

export default OptionIcon;
