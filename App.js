import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Screens/Home";

import CameraSc from "./Screens/CameraSc";

const Root = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    CameraSc: {
      screen: CameraSc
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#b83227"
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const container = createAppContainer(Root);
export default container;
