import React from "react";

import WelcomePage from "../features/Welcome/WelcomePage";
import LoginPage from "../features/Login/LoginPage";
import ProductList from "../features/product/ProductList";
import { ROUTE } from "../shared/constant";
import HomePage from "../features/home/HomePage";

import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "../features/home/main/MainPage";

const Stack = createStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTE.WELCOME}>
      <Stack.Screen
        name={ROUTE.WELCOME}
        component={WelcomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTE.LOGIN}
        component={LoginPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ROUTE.HOME}
        component={MainPage}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen name={ROUTE.PRODUCT} component={ProductList} /> */}

      <Stack.Screen
        name={ROUTE.MAIN}
        component={HomePage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppRouter;
