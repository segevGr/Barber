import React from "react";
import { Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../../navigation/Routes";

import PageTitle from "../../../components/PageTitle";
import GenericContainer from "../../../components/GenericContainer";
import OrderIconsLine from "../../../components/OrderIconsLine";

import { ChooseBarberStrings } from "../../../assets/strings/Strings";
import GlobalStyles from "../../../assets/styles/GlobalStyles";

const SelectDate = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={GlobalStyles.greyBackground}>
      <PageTitle titleTxt={ChooseBarberStrings.reservationOrder} />
      <OrderIconsLine isFocus={"selectDate"} />
    </SafeAreaView>
  );
};

export default SelectDate;
