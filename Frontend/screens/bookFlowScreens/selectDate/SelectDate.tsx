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
import { getAllWeekendDays } from "../../../utils/DateFunctions";
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
  const [dialogMessage, setDialogMessage] = useState<string>("");

  const today = new Date();
  const [weekendDays, setWeekendDays] = useState<Record<string, any>>(
    getAllWeekendDays(today)
  );

  const handleDayPressed = (date: string) => {
    if (date in weekendDays) {
      setDialogMessage(ChooseDateStrings.alertDayOff);
      setIsDialogVisible(true);
      return;
    }
    if (date in unAvailableDate) {
      setDialogMessage(ChooseDateStrings.alertUnavailable);
      setIsDialogVisible(true);
      return;
    }
    if (date in availableDate) {
      // navigation.navigate()
    }
  };

  const getAvailableDate = () => {
    const markedDates = {
      "2025-04-28": {
        customStyles: {
          container: {
            backgroundColor: "transparent",
          },
          text: {
            color: Colors.blue,
          },
        },
      },
      "2025-04-29": {
        customStyles: {
          container: {
            backgroundColor: "transparent",
          },
          text: {
            color: Colors.blue,
          },
        },
      },
      "2025-04-30": {
        customStyles: {
          container: {
            backgroundColor: "transparent",
          },
          text: {
            color: Colors.blue,
          },
        },
      },
    };
    return markedDates;
  };

  const getUnAvailableDate = () => {
    const markedDates = {
      "2025-04-24": {
        customStyles: {
          container: {
            backgroundColor: "transparent",
          },
          text: {
            color: Colors.red,
          },
        },
      },
      "2025-04-23": {
        customStyles: {
          container: {
            backgroundColor: "transparent",
          },
          text: {
            color: Colors.red,
          },
        },
      },
      "2025-04-22": {
        customStyles: {
          container: {
            backgroundColor: "transparent",
          },
          text: {
            color: Colors.red,
          },
        },
      },
    };
    return markedDates;
  };

  const availableDate = getAvailableDate();
  const unAvailableDate = getUnAvailableDate();

  const calendarTheme = {
    calendarBackground: Colors.brightWhite,
    textDayFontSize: horizontalScale(16),
    textDayFontFamily: getFontFamily("Roboto", "400"),
    todayTextColor: null,
    textMonthFontSize: horizontalScale(18),
    textMonthFontFamily: getFontFamily("Roboto", "400"),
    textDayHeaderFontSize: horizontalScale(12),
    textDayHeaderFontFamily: getFontFamily("Roboto", "300"),
    textDisabledColor: "lightgray",
  };

  const handleMonthChange = (month: Record<string, number>) => {
    const selectedMonthIndex = month.month - 1;

    const isPastMonth =
      today.getFullYear() > month.year ||
      (today.getFullYear() === month.year &&
        today.getMonth() > selectedMonthIndex);

    if (isPastMonth) return;

    const isCurrentMonth =
      today.getFullYear() === month.year &&
      today.getMonth() === selectedMonthIndex;

    const startDate = isCurrentMonth
      ? new Date()
      : new Date(month.year, selectedMonthIndex, 1);

    setWeekendDays(getAllWeekendDays(startDate));
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
          message={dialogMessage}
          acceptAction={() => setIsDialogVisible(false)}
        />

        <View style={styles.calendarContainer}>
          <Calendar
            minDate={new Date().toISOString().split("T")[0]}
            disableAllTouchEventsForDisabledDays={true}
            markedDates={{
              ...weekendDays,
              ...availableDate,
              ...unAvailableDate,
            }}
            markingType="custom"
            onMonthChange={handleMonthChange}
            onDayPress={(day: Record<string, string>) => {
              handleDayPressed(day.dateString);
            }}
            style={styles.calendar}
            theme={calendarTheme}
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
