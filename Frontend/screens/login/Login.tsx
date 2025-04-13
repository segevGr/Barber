import React, { useRef, useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useDispatch } from "react-redux";
import {
  setIsLoggedInRedux,
  setUsernameRedux,
  setPhoneNumberRedux,
  setEmailRedux,
} from "../../redux/reducers/userSlice";
import { AppDispatch } from "../../redux/store";

import InputContainer from "../../components/InputContainer";
import GenericButton from "../../components/GenericButton";

import styles from "./Styles";
import { LoginStrings } from "../../assets/strings/Strings";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import KeyboardAvoidContainer from "../../components/KeyboardAvoidContainer";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const passwordRef = useRef<TextInput | null>(null);

  const focusPassword = () => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  };

  const handleLogin = () => {
    dispatch(setIsLoggedInRedux(true));
    dispatch(setUsernameRedux("שגב גרוטס"));
    dispatch(setPhoneNumberRedux("0545151211"));
    dispatch(setEmailRedux(""));
  };

  return (
    <KeyboardAvoidContainer>
      <ImageBackground
        style={GlobalStyles.flex1}
        source={require("../../assets/images/loginBackground.png")}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(234, 67, 53, 0.4)", "rgba(0, 99, 216, 0.4)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradient}
        />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text style={styles.barbershopName}>
              {LoginStrings.headerBarberName[0]}
            </Text>
            <Text style={styles.barbershopName}>
              {LoginStrings.headerBarberName[1]}
            </Text>
            <Text style={styles.title}>{LoginStrings.headerTitle}</Text>
          </View>
          <View style={styles.inputsContainer}>
            <InputContainer
              value={username}
              setValue={setUsername}
              string={"username"}
              nextFunc={focusPassword}
            />
            <InputContainer
              value={password}
              setValue={setPassword}
              string={"password"}
              ref={passwordRef}
            />
            <GenericButton
              onPress={handleLogin}
              text={LoginStrings.loginButton}
              isPressable={username.trim() !== "" && password.trim() !== ""}
              buttonStyle={styles.loginButton}
              textStyle={styles.loginText}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidContainer>
  );
};

export default Login;
