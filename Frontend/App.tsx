import React from "react";
import { StatusBar } from "react-native";

import { Provider } from "react-redux";
import store from "./redux/store";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigation/RootNavigation";

import { useFonts } from "expo-font";
import LoadingOverlay from "./utils/LoadingOverlay";

const App = () => {
  const [fontsLoaded] = useFonts({
    "TheGirlNextDoor-Regular": require("./assets/fonts/TheGirlNextDoor-Regular.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-ExtraBold": require("./assets/fonts/Roboto-ExtraBold.ttf"),
    "Roboto-ExtraLight": require("./assets/fonts/Roboto-ExtraLight.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
    "KtavYadCLM-Bold": require("./assets/fonts/KtavYadCLM-Bold.otf"),
    "KtavYadCLM-Medium": require("./assets/fonts/KtavYadCLM-Medium.otf"),
  });

  if (!fontsLoaded) {
    return <LoadingOverlay />;
  }

  return (
    <Provider store={store}>
      <StatusBar hidden />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
