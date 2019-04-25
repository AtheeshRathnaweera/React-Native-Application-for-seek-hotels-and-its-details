import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './App/ComponentFolder/Home';
import Welcome from './App/ComponentFolder/Welcome';

const MainNavigator = createStackNavigator({
  home: Home,
  welcome: Welcome

})

const App = createAppContainer(MainNavigator);

export default App;