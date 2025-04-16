import React from "react";
import { Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../../navigation/Routes";

import PageTitle from "../../../components/PageTitle";
import BackButton from "../../../components/BackButton";
import GenericContainer from "../../../components/GenericContainer";
import OrderIconsLine from "../../../components/OrderIconsLine";

import { ChooseBarberStrings } from "../../../assets/strings/Strings";
import GlobalStyles from "../../../assets/styles/GlobalStyles";
import styles from "./Styles";

const SelectBarber = () => {
  const navigation = useNavigation();

  const handleBarberChoose = () => {
    // @ts-ignore
    navigation.navigate(Routes.SelectDate, { barberId: "testId" });
  };
  return (
    <SafeAreaView style={GlobalStyles.greyBackground}>
      <BackButton />
      <PageTitle titleTxt={ChooseBarberStrings.reservationOrder} />
      <OrderIconsLine isFocus={"selectBarber"} />
      <GenericContainer style={styles.container}>
        <Text style={styles.chooseBarberTitle}>
          {ChooseBarberStrings.title}
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => handleBarberChoose()}
        >
          <GenericContainer style={styles.barberContainer}>
            <Text style={styles.barberName}>שלומי הרוש</Text>
            <Image
              source={require("../../../assets/images/reservationsImages/shlomi.png")}
              style={styles.barberImage}
              resizeMode="contain"
            />
          </GenericContainer>
        </TouchableOpacity>
      </GenericContainer>
    </SafeAreaView>
  );
};

export default SelectBarber;
