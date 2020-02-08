/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './js/screens/HomeScreen';
import LoginScreen from './js/screens/LoginScreen';
import AuthLoadingScreen from './js/screens/AuthLoadingScreen';
import ProfileScreen from './js/screens/ProfileScreen';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
});

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen
});

const SwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStack,
  App: AppStack,
},{
  initialRouteName: 'AuthLoading',
});


const AppContainer = createAppContainer(SwitchNavigator);


export default class App extends Component{
  render(){
    return(
      <AppContainer />
    )
  }
}

