
import React, {Component} from 'react';
import {Platform, Text, View, Alert, ToastAndroid} from 'react-native';
import styles from './styles'
import { TextInput, Button } from 'react-native-paper';

type Props = {};
class Welcome extends Component<Props> {

  static navigationOptions={
    header : null
  }

  state = {
    name: "",
    password: ""
  };

  checkLogin(){
      const { name, password} = this.state

      if(name == "" || password == ""){
          ToastAndroid.show("Input fields are empty !",ToastAndroid.LONG);

      }else{
        Alert.alert("Check log in method","Name :"+name+" Password : "+password,[{text:"Ok"}])

      }

}


 render() {

  const {logInButtonHolder,signinhereHolder,signinHereText,buttonStyle, inputFields,upperBox,parent,welcomeTxtHolder, welcomeTxt, formHolder } = styles

   return (

    <View style= {parent} >

      <View style={upperBox} />
       

     <View style={welcomeTxtHolder} >
       <Text style={welcomeTxt}>WELCOME</Text>
     </View>

     <View style={formHolder} >
          <TextInput
              style={inputFields}
              mode = 'outlined'
              label= 'Name'
              selectionColor='#115175'
              value= {this.state.name}
              onChangeText={textName => this.setState({ name : textName })}
          />

          <TextInput
              style={inputFields}
              mode = 'outlined'
              label= 'Password'
              selectionColor='#115175'
              TextInputOutlined = '#115175'
              value= {this.state.passsword}
              onChangeText={textPassword => this.setState({ password : textPassword })}
              secureTextEntry={true} 
          />

          <View style={logInButtonHolder}>

              <Button mode="contained" style={buttonStyle} onPress={_=>this.checkLogin()}>
                  LOG IN
              </Button>

              <Button mode="contained" style={buttonStyle}>
                  LOG IN VIA FACEBOOK
              </Button>

          </View>

    </View>

    <View style={signinhereHolder} >
       <Text style={signinHereText}>Don't have an account? Sign in from here.</Text>

        <Button mode="contained" style={buttonStyle} onPress={()=>this.props.navigation.navigate('signin')}>
            SIGN IN
        </Button>


     </View>

   </View>
     
   );
 }
}

export default Welcome