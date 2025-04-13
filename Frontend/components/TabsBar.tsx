import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Routes from "../navigation/Routes";

import OptionIcon from "./OptionIcon";

import { horizontalScale, verticalScale } from "../assets/styles/Scaling";
import Colors from "../assets/styles/Colors";

const TabsBar = ({ state }) => {
  const navigation = useNavigation();
  if (!state) return null;

  const handleNavigate = useCallback(
    (screen: string, index: number) => {
      if (state.index !== index) {
        // @ts-ignore
        navigation.navigate(screen);
      }
    },
    [navigation, state.index]
  );

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.allIconsContainer}>
        <View style={styles.coupleIconsContainer}>
          <OptionIcon
            type={"home"}
            isInTabs={true}
            isActive={state.index === 0}
            onPress={() => handleNavigate(Routes.BookFlow, 0)}
          />
          <OptionIcon
            type={"gallery"}
            isInTabs={true}
            isActive={state.index === 1}
            onPress={() => handleNavigate(Routes.Gallery, 1)}
          />
        </View>
        <View style={styles.coupleIconsContainer}>
          <OptionIcon
            type={"reservations"}
            isInTabs={true}
            isActive={state.index === 2}
            onPress={() => handleNavigate(Routes.Reservations, 2)}
          />
          <OptionIcon
            type={"profile"}
            isInTabs={true}
            isActive={state.index === 3}
            onPress={() => handleNavigate(Routes.Profile, 3)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: verticalScale(80),
    borderWidth: horizontalScale(0.5),
    borderTopColor: Colors.brightWhite,
    backgroundColor: Colors.grey,
    justifyContent: "center",
    overflow: "hidden",
  },
  circle: {
    position: "absolute",
    bottom: verticalScale(40),
    width: horizontalScale(100),
    height: horizontalScale(100),
    borderRadius: horizontalScale(50),
    borderWidth: horizontalScale(0.5),
    borderColor: Colors.brightWhite,
    backgroundColor: Colors.grey,
    alignSelf: "center",
  },
  allIconsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  coupleIconsContainer: {
    flexDirection: "row",
    width: horizontalScale(135),
    paddingHorizontal: horizontalScale(16),
    marginBottom: verticalScale(10),
    justifyContent: "space-between",
  },
});

export default TabsBar;
