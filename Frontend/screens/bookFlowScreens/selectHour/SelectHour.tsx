import { useEffect, useState } from "react";
import { Text, SafeAreaView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import Routes from "../../../navigation/Routes";

import BackButton from "../../../components/BackButton";
import PageTitle from "../../../components/PageTitle";
import GenericContainer from "../../../components/GenericContainer";
import OrderIconsLine from "../../../components/OrderIconsLine";
import HoursContainer from "../../../components/HoursContainer";
import AlertDialog from "../../../utils/AlertDialog";

import { ChooseBarberStrings } from "../../../assets/strings/Strings";
import GlobalStyles from "../../../assets/styles/GlobalStyles";
import styles from "./Styles";

const SelectHour = () => {
  const navigation = useNavigation();
  const route = useRoute();

  type HoursArrayProps = {
    hour: string;
    availability: boolean;
  };
  const [dayHours, setDayHours] = useState<HoursArrayProps[]>([]);

  const arrayToDelete: HoursArrayProps[] = [
    { hour: "12:00", availability: true },
    { hour: "12:40", availability: true },
    { hour: "13:20", availability: false },
    { hour: "14:00", availability: false },
    { hour: "14:40", availability: true },
    { hour: "15:20", availability: false },
    { hour: "16:00", availability: false },
    { hour: "16:40", availability: false },
    { hour: "17:20", availability: false },
    { hour: "18:00", availability: true },
    { hour: "18:40", availability: true },
    { hour: "19:20", availability: false },
  ];

  useEffect(() => {
    const loadDayHours = () => {
      setDayHours(arrayToDelete);
    };
    loadDayHours();
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.greyBackground}>
      <BackButton />
      <PageTitle titleTxt={ChooseBarberStrings.reservationOrder} />
      <OrderIconsLine isFocus={"selectHour"} />
      <GenericContainer>
        {/* <AlertDialog
          visible={isDialogVisible}
          title={ChooseDateStrings.alertTitle}
          message={dialogMessage}
          acceptAction={() => setIsDialogVisible(false)}
		  />
		  */}
        <Text style={styles.selectTitle}>בחר שעה</Text>
        <View style={styles.hourListContainer}>
          <FlatList<HoursArrayProps>
            data={dayHours}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.hour}
            numColumns={2}
            columnWrapperStyle={styles.flatListRow}
            bounces={false}
            renderItem={({ item }) => (
              <HoursContainer
                hour={item.hour}
                availability={item.availability}
              />
            )}
          />
        </View>
      </GenericContainer>
    </SafeAreaView>
  );
};

export default SelectHour;
