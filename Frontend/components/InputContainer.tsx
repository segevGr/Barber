import React, { forwardRef, useCallback } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { getFontFamily } from "../assets/fonts/getFontFamily";
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from "../assets/styles/Scaling";
import Colors from "../assets/styles/Colors";
import { LoginStrings, ProfileStrings } from "../assets/strings/Strings";

type InputContainer = {
  value: string;
  setValue: (value: string) => void;
  string: keyof typeof fieldConfigMap;
  nextFunc?: () => void;
};

type FontAwesomeIconName = "user-o" | "unlock-alt" | "phone" | "envelope";

type FieldConfig = {
  icon: FontAwesomeIconName;
  isSecure: boolean;
  placeholder: string | undefined;
  isLogin: boolean;
  returnKeyType: "next" | "done";
  keyboardType: "default" | "phone-pad" | "email-address";
  accessibilityLabel: string;
  accessibilityHint: string;
};

const fieldConfigMap: Record<string, FieldConfig> = {
  username: {
    icon: "user-o",
    isSecure: false,
    placeholder: LoginStrings.username,
    isLogin: true,
    returnKeyType: "next",
    keyboardType: "default",
    accessibilityLabel: LoginStrings.username,
    accessibilityHint: LoginStrings.accessibilityHintUsername,
  },
  password: {
    icon: "unlock-alt",
    isSecure: true,
    placeholder: LoginStrings.password,
    isLogin: true,
    returnKeyType: "done",
    keyboardType: "default",
    accessibilityLabel: LoginStrings.password,
    accessibilityHint: LoginStrings.accessibilityHintPassword,
  },
  phone: {
    icon: "phone",
    isSecure: false,
    placeholder: ProfileStrings.phone,
    isLogin: false,
    returnKeyType: "next",
    keyboardType: "phone-pad",
    accessibilityLabel: ProfileStrings.phone,
    accessibilityHint: ProfileStrings.accessibilityHintPhone,
  },
  email: {
    icon: "envelope",
    isSecure: false,
    placeholder: ProfileStrings.email,
    isLogin: false,
    returnKeyType: "done",
    keyboardType: "email-address",
    accessibilityLabel: ProfileStrings.email,
    accessibilityHint: ProfileStrings.accessibilityHintEmail,
  },
};

const InputContainer = forwardRef<TextInput, InputContainer>(
  ({ value, setValue, string, nextFunc }, ref) => {
    const {
      icon,
      isSecure,
      placeholder,
      isLogin,
      returnKeyType,
      keyboardType,
      accessibilityLabel,
      accessibilityHint,
    } = fieldConfigMap[string] || {
      icon: "question",
      isSecure: false,
      placeholder: null,
    };

    const handleNext = useCallback(() => {
      if (nextFunc) {
        nextFunc();
      }
    }, [nextFunc]);

    return (
      <View
        style={[styles.InputContainer, isLogin && styles.loginInputContainer]}
      >
        <FontAwesome
          name={icon}
          size={horizontalScale(30)}
          color={isLogin ? Colors.white : Colors.black}
          style={isLogin ? styles.icon : null}
        />
        <TextInput
          ref={ref || null}
          placeholder={placeholder}
          placeholderTextColor={Colors.brightGray}
          value={value}
          onChangeText={setValue}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          style={[
            styles.input,
            isLogin ? { color: Colors.white } : { color: Colors.black },
          ]}
          secureTextEntry={isSecure}
          onSubmitEditing={handleNext}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  InputContainer: {
    borderWidth: horizontalScale(1),
    borderColor: "transparent",
    borderBottomColor: Colors.black,
    height: verticalScale(30),
    width: horizontalScale(250),
    marginTop: verticalScale(15),
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: horizontalScale(20),
  },
  loginInputContainer: {
    borderColor: Colors.white,
    borderBottomColor: Colors.white,
    borderRadius: horizontalScale(3),
    height: verticalScale(44),
    width: horizontalScale(280),
    marginTop: verticalScale(23),
    backgroundColor: Colors.blackOpacity,
  },
  input: {
    flex: 1,
    fontSize: scaleFontSize(25),
    fontFamily: getFontFamily("Roboto", "500"),
    marginLeft: horizontalScale(15),
    textAlign: "left",
  },
});

export default InputContainer;
