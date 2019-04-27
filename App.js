import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './App/ComponentFolder/Home';
import Welcome from './App/ComponentFolder/Welcome';
import SignIn from './App/ComponentFolder/SignIn';

const MainNavigator = createStackNavigator({

  welcome: Welcome,
  signin: SignIn,
  home: Home

})

const App = createAppContainer(MainNavigator);

export default App;