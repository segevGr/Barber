import React, { useRef, useState } from "react";
import {
  Text,
  View,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
import {
  setIsLoggedInRedux,
  setUsernameRedux,
  setPhoneNumberRedux,
  setEmailRedux,
} from "../../redux/reducers/userSlice";
import { RootState, AppDispatch } from "../../redux/store";

import PageTitle from "../../components/PageTitle";
import GenericContainer from "../../components/GenericContainer";
import GenericButton, {
  GradientBackground,
} from "../../components/GenericButton";
import InputContainer from "../../components/InputContainer";
import KeyboardAvoidContainer from "../../components/KeyboardAvoidContainer";

import GlobalStyles from "../../assets/styles/GlobalStyles";
import { ProfileStrings, TabsStrings } from "../../assets/strings/Strings";
import Colors from "../../assets/styles/Colors";
import styles from "./Styles";

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();

  const username = useSelector((state: RootState) => state.user.username);
  const [phoneNumber, setPhoneNumber] = useState<string>(
    useSelector((state: RootState) => state.user.phoneNumber)
  );
  const [email, setEmail] = useState<string>("");
  const emailRef = useRef<TextInput | null>(null);
  const [isNotificationAllowed, setIsNotificationAllowed] = useState<boolean>(
    useSelector((state: RootState) => state.user.isNotificationAllowed)
  );

  const focusEmail = () => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  };

  // Add "Are you sure" Alert
  const handleLogout = () => {
    dispatch(setUsernameRedux(""));
    dispatch(setPhoneNumberRedux(""));
    dispatch(setEmailRedux(""));
    dispatch(setIsLoggedInRedux(false));
  };

  return (
    <KeyboardAvoidContainer>
      <SafeAreaView style={GlobalStyles.greyBackground}>
        <PageTitle titleTxt={TabsStrings.profile} />
        <GenericContainer>
          <Text style={styles.title}>{username}</Text>
          <View style={styles.inputsContainer}>
            <InputContainer
              value={phoneNumber}
              setValue={setPhoneNumber}
              string={"phone"}
              nextFunc={focusEmail}
            />
            <InputContainer
              value={email}
              setValue={setEmail}
              string={"email"}
              ref={emailRef}
            />
            <View style={styles.notificationContainer}>
              <FontAwesome
                name="bell"
                color={Colors.black}
                style={styles.notificationIcon}
              />
              <Text style={styles.notificationText}>
                {ProfileStrings.notifications}
              </Text>
              <Switch
                value={isNotificationAllowed}
                onValueChange={setIsNotificationAllowed}
              />
            </View>
            <GradientBackground style={styles.saveChangeContainer}>
              <GenericButton
                // onPress={null}
                text={ProfileStrings.saveChanges}
                buttonStyle={styles.saveChangesButton}
                textStyle={styles.saveChangesText}
                isPressable={email.trim() !== "" && phoneNumber.trim() !== ""}
              />
            </GradientBackground>
          </View>
          <TouchableOpacity
            style={styles.logoutContainer}
            onPress={handleLogout}
          >
            <FontAwesome
              name="sign-out"
              color={Colors.red}
              style={styles.logoutIcon}
            />
            <Text style={styles.logoutText}>{ProfileStrings.logout}</Text>
          </TouchableOpacity>
        </GenericContainer>
      </SafeAreaView>
    </KeyboardAvoidContainer>
  );
};

export default Profile;
