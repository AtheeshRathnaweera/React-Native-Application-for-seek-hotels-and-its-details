import React,{Component} from 'react';
import {Platform, Text, View, Button, TextInput} from 'react-native';
import SplashScreen from 'react-native-splash-screen';


export default class App extends Component {
    componentDidMount() {
      SplashScreen.hide()
  }

}