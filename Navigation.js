import React from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { Icon } from "native-base";
import { Image } from "react-native";
import StartPage from "./screen/StartPage";
import SignUp from "./screen/SignUp";
import SignIn from "./screen/SignIn";
import Home from "./screen/Home";
import Membership from "./screen/Membership";

const AppNavigator = createStackNavigator(
  {
    StartPage: {
      screen: StartPage,
      navigationOptions: {
        tabBarLabel: "StartPage",
        // color:"#1A5CAD",
        //tabBarActiveTintColor
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={20} style={{ color: "white" }} />
        )
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        tabBarLabel: "Sign Up",
        // color:"#1A5CAD",
        //tabBarActiveTintColor
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={20} style={{ color: "white" }} />
        )
      }
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        tabBarLabel: "SignIn",
        // color:"#1A5CAD",
        //tabBarActiveTintColor
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={20} style={{ color: "white" }} />
        )
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        // color:"#1A5CAD",
        //tabBarActiveTintColor
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={20} style={{ color: "white" }} />
        )
      }
    },
    Membership: {
      screen: Membership,
      navigationOptions: {
        tabBarLabel: "Membership",
        // color:"#1A5CAD",
        //tabBarActiveTintColor
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={20} style={{ color: "white" }} />
        )
      }
    }
  },
  {
    // tabBarOptions: {
    //   activeTintColor: "white",
    //   inactiveTintColor: 'white',
    //   style: {
    //     backgroundColor: 'red',
    //   },
    // },

    initialRouteName: "Membership"
  }
);

export default createAppContainer(AppNavigator);
