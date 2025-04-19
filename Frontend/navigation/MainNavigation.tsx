import { createStackNavigator } from "@react-navigation/stack";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import Routes from "./Routes";

import TabsBar from "./TabsBar";
import Login from "../screens/login/Login";
import Home from "../screens/home/Home";
import Profile from "../screens/profile/Profile";
import Gallery from "../screens/gallery/Gallery";
import Reservations from "../screens/reservations/Reservations";
import SelectBarber from "../screens/bookFlowScreens/selectBarber/SelectBarber";
import SelectDate from "../screens/bookFlowScreens/selectDate/SelectDate";
import SelectHour from "../screens/bookFlowScreens/selectHour/SelectHour";

const NonAuthenticatedStack = createStackNavigator();
const TabsNavigation = createBottomTabNavigator();
const BookFlowStack = createStackNavigator();

export const NonAuthenticated = () => {
  return (
    <NonAuthenticatedStack.Navigator screenOptions={{ headerShown: false }}>
      <NonAuthenticatedStack.Screen name={Routes.Login} component={Login} />
    </NonAuthenticatedStack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <TabsNavigation.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props: BottomTabBarProps) => <TabsBar {...props} />}
    >
      <TabsNavigation.Screen name={Routes.BookFlow} component={BookFlow} />
      <TabsNavigation.Screen name={Routes.Gallery} component={Gallery} />
      <TabsNavigation.Screen
        name={Routes.Reservations}
        component={Reservations}
      />
      <TabsNavigation.Screen name={Routes.Profile} component={Profile} />
    </TabsNavigation.Navigator>
  );
};

export const BookFlow = () => {
  return (
    <BookFlowStack.Navigator screenOptions={{ headerShown: false }}>
      <BookFlowStack.Screen name={Routes.Home} component={Home} />
      <BookFlowStack.Screen
        name={Routes.SelectBarber}
        component={SelectBarber}
      />
      <BookFlowStack.Screen name={Routes.SelectDate} component={SelectDate} />
      <BookFlowStack.Screen name={Routes.SelectHour} component={SelectHour} />
    </BookFlowStack.Navigator>
  );
};
