import { useState } from "react";
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import Routes from "../../../navigation/Routes";

import BackButton from "../../../components/BackButton";
import PageTitle from "../../../components/PageTitle";
import GenericContainer from "../../../components/GenericContainer";
import OrderIconsLine from "../../../components/OrderIconsLine";
import getAllSaturdays from "../../../utils/getAllSaturdays";
import AlertDialog from "../../../utils/AlertDialog";

import {
  ChooseBarberStrings,
  ChooseDateStrings,
} from "../../../assets/strings/Strings";
import GlobalStyles from "../../../assets/styles/GlobalStyles";
import Colors from "../../../assets/styles/Colors";
import { horizontalScale } from "../../../assets/styles/Scaling";
import { getFontFamily } from "../../../assets/fonts/getFontFamily";
import styles from "./Styles";

const SelectDate = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { barberId } = route.params as { barberId: string };
  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);

  const today = new Date();
  const [saturdays, setSaturdays] = useState<Record<string, any>>(
    getAllSaturdays(today.getFullYear(), today.getMonth())
  );

  const handleDayPressed = (date: string) => {
    if (date in saturdays) {
      setIsDialogVisible(!isDialogVisible);
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.greyBackground}>
      <BackButton />
      <PageTitle titleTxt={ChooseBarberStrings.reservationOrder} />
      <OrderIconsLine isFocus={"selectDate"} />
      <GenericContainer>
        <AlertDialog
          visible={isDialogVisible}
          title={ChooseDateStrings.alertTitle}
          message={ChooseDateStrings.alertDayOff}
          acceptAction={() => setIsDialogVisible(!isDialogVisible)}
        />

        <View style={styles.calendarContainer}>
          <Calendar
            markedDates={saturdays}
            markingType="custom"
            onMonthChange={(month: Record<string, number>) => {
              setSaturdays(getAllSaturdays(month.year, month.month - 1));
            }}
            onDayPress={(day: Record<string, string>) => {
              handleDayPressed(day.dateString);
            }}
            style={styles.calendar}
            theme={{
              calendarBackground: Colors.brightWhite,
              textDayFontSize: horizontalScale(16),
              textDayFontFamily: getFontFamily("Roboto", "400"),
              // dayTextColor: Colors.blue,
              // todayTextColor: Colors.blue,
              textMonthFontSize: horizontalScale(18),
              textMonthFontFamily: getFontFamily("Roboto", "400"),
              textDayHeaderFontSize: horizontalScale(12),
              textDayHeaderFontFamily: getFontFamily("Roboto", "300"),
              textDisabledColor: "lightgray",
            }}
          />
        </View>
        <View style={styles.ticketsContainer}>
          <View
            style={[
              styles.ticketContainer,
              { backgroundColor: Colors.lightOrange },
            ]}
          >
            <Text style={styles.ticketText}>{ChooseDateStrings.dayOff}</Text>
          </View>
          <View
            style={[styles.ticketContainer, { backgroundColor: Colors.red }]}
          >
            <Text style={styles.ticketText}>
              {ChooseDateStrings.nonAvailable}
            </Text>
          </View>

          <View
            style={[styles.ticketContainer, { backgroundColor: Colors.blue }]}
          >
            <Text style={styles.ticketText}>{ChooseDateStrings.available}</Text>
          </View>
        </View>
      </GenericContainer>
    </SafeAreaView>
  );
};

export default SelectDate;
