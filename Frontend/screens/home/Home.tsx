import React from "react";
import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../navigation/Routes";

import PageTitle from "../../components/PageTitle";
import GenericButton, {
  GradientBackground,
} from "../../components/GenericButton";

import GlobalStyles from "../../assets/styles/GlobalStyles";
import { TabsStrings, HomeStrings } from "../../assets/strings/Strings";
import styles from "./Styles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={GlobalStyles.greyBackground}>
      <PageTitle titleTxt={TabsStrings.home} />
      <View style={styles.mainContainer}>
        <Image
          style={styles.barberImage}
          resizeMode="cover"
          source={require("../../assets/images/homeImages/barberContainer.png")}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{HomeStrings.barberName}</Text>
          <Text style={styles.address}>{HomeStrings.barberAddress}</Text>
          <Text style={styles.workHours}>{HomeStrings.workHours}</Text>
          <GradientBackground style={styles.bookButtonContainer}>
            <GenericButton
              // @ts-ignore
              onPress={() => navigation.navigate(Routes.SelectBarber)}
              text={HomeStrings.bookButton}
              buttonStyle={styles.BookButton}
              textStyle={styles.bookText}
            />
          </GradientBackground>
        </View>
        <Image
          style={styles.scissorsImage}
          resizeMode="stretch"
          source={require("../../assets/images/homeImages/scissors.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
