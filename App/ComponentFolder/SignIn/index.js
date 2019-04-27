import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from './styles'

type Props = {};
class SignIn extends Component<Props> {

     static navigationOptions={
          header : null
    }

    state = {
         name: '',
         telephone: '',
         email:'',
         password:'',
         repassword:''
    };


 render() {

  const {parent,SignInTxtHolder, SignInTxt, formHolder, inputFields,buttonStyle,buttonHolder} = styles

   return (

    <View style={parent}>


          <View style={SignInTxtHolder} >
              <Text style={SignInTxt}>SIGN IN</Text>
          </View>

          <View style={formHolder}>

              <TextInput
                  style={inputFields}
                  mode = 'outlined'
                  label= 'Name'
                  selectionColor='#115175'
                  value= {this.state.name}
              />

              <TextInput
                  style={inputFields}
                  mode = 'outlined'
                  label= 'Telephone No.'
                  selectionColor='#115175'
                  value= {this.state.telephone}
              />

              <TextInput
                  style={inputFields}
                  mode = 'outlined'
                  label= 'Email'
                  selectionColor='#115175'
                  value= {this.state.email}
              />

              <TextInput
                  style={inputFields}
                  mode = 'outlined'
                  label= 'Password'
                  selectionColor='#115175'
                  value= {this.state.password}
              />

              <TextInput
                  style={inputFields}
                  mode = 'outlined'
                  label= 'Reenter the Password'
                  selectionColor='#115175'
                  value= {this.state.repassword}
              />

            <View style={buttonHolder} >

                  <Button mode="contained" style={buttonStyle}>
                    SIGN IN
                  </Button>

                  <Button mode="contained" style={buttonStyle}>
                    SIGN IN VIA FACEBOOK
                  </Button>

            </View>



          </View>
   </View>
     
   );
 }
}

export default SignIn