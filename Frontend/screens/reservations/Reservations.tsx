import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
import {
  getReservationsDetails,
  deleteReservationRedux,
} from "../../redux/reducers/reservationsSlice";
import { RootState, AppDispatch } from "../../redux/store";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../navigation/Routes";

import PageTitle from "../../components/PageTitle";
import GenericContainer from "../../components/GenericContainer";
import Divider from "../../components/Divider";
import GenericButton, {
  GradientBackground,
} from "../../components/GenericButton";
import AlertDialog from "../../utils/AlertDialog";

import GlobalStyles from "../../assets/styles/GlobalStyles";
import { ReservationsStrings } from "../../assets/strings/Strings";
import Colors from "../../assets/styles/Colors";
import styles from "./Styles";

const Reservations = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);

  const isHasReservation = useSelector(
    (state: RootState) => state.reservations.isHasReservation
  );
  const {
    barberName,
    barberAddress,
    barberPhoneNumber,
    haircutDate,
    haircutHours,
    haircutPrice,
  } = useSelector(getReservationsDetails);

  const handleCallPress = (): void => {
    const phoneNumber = `tel:${barberPhoneNumber}`;
    Linking.openURL(phoneNumber);
  };

  const deleteReservation = () => {
    dispatch(deleteReservationRedux());
    setIsDialogVisible(!isDialogVisible);
  };

  return (
    <SafeAreaView style={GlobalStyles.greyBackground}>
      {isHasReservation ? (
        <>
          <AlertDialog
            visible={isDialogVisible}
            title={ReservationsStrings.cancelTitle}
            message={`${haircutDate}\n${haircutHours}`}
            acceptAction={() => deleteReservation()}
            cancelAction={() => setIsDialogVisible(!isDialogVisible)}
          />
          <PageTitle titleTxt={ReservationsStrings.nextReservation} />
          <GenericContainer>
            <View style={styles.barberDetailsContainer}>
              <Image
                source={require("../../assets/images/reservationsImages/shlomi.png")}
                resizeMode="cover"
                style={styles.image}
              />
              <View style={styles.barberDetails}>
                <Text style={styles.barberName}>{barberName}</Text>
                <Text style={styles.barberAddress}> {barberAddress} </Text>
                <TouchableOpacity
                  style={styles.callButton}
                  onPress={handleCallPress}
                >
                  <Text style={styles.callButtonText}>
                    {ReservationsStrings.callButton}
                  </Text>
                  <FontAwesome
                    name="phone"
                    color={Colors.white}
                    style={styles.callIcon}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.barberIcons}>
                <Image
                  source={require("../../assets/images/reservationsImages/mustache.png")}
                  resizeMode="contain"
                  style={styles.mustacheImage}
                />
                <Image
                  source={require("../../assets/images/reservationsImages/scissors.png")}
                  resizeMode="contain"
                  style={styles.scissorsImage}
                />
              </View>
            </View>
            <Divider />
            <View style={styles.detailsContainer}>
              <Text style={styles.subTitle}>
                {ReservationsStrings.haircutTimeTitle}
              </Text>
              <Text style={styles.timeDetails}>
                {`${haircutDate}\n${haircutHours}`}
              </Text>
            </View>
            <Divider />
            <View style={styles.detailsContainer}>
              <Text style={styles.subTitle}>{ReservationsStrings.price}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.timeDetails}>{haircutPrice.type}</Text>
                <Text
                  style={styles.timeDetails}
                >{`${haircutPrice.price}₪`}</Text>
              </View>
            </View>
            <Divider />
            <TouchableOpacity
              style={[styles.detailsContainer, styles.cancelContainer]}
              onPress={() => setIsDialogVisible(!isDialogVisible)}
            >
              <FontAwesome
                name="times"
                color={Colors.red}
                style={styles.cancelIcon}
              />
              <Text style={styles.cancelText}>
                {ReservationsStrings.cancel}
              </Text>
            </TouchableOpacity>
          </GenericContainer>
        </>
      ) : (
        <>
          <View style={styles.noReservationContainer}>
            <Text style={styles.noReservationText}>
              {ReservationsStrings.noReservation}
            </Text>
            <GradientBackground style={styles.bookButtonContainer}>
              <GenericButton
                // @ts-ignore
                onPress={() => navigation.navigate(Routes.BookFlow)}
                text={ReservationsStrings.makeReserve}
                buttonStyle={styles.reserveButton}
                textStyle={styles.reserveText}
              />
            </GradientBackground>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Reservations;
