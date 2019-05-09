import React, {Component} from 'react';
import {Platform, Text, View,ToastAndroid,Alert, SafeAreaView} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from './styles'

type Props = {};
class SignIn extends Component<Props> {

     static navigationOptions={
          header : null
    }

    state = {
         name: "",
         telephone: "",
         email:"",
         password:"",
         repassword:""
    };

    signInMethod(){
      const { name, telephone,email,password,repassword} = this.state

      if(name == "" || password == "" || telephone =="" || email =="" || repassword ==""){
          ToastAndroid.show("Please fill the forums properly !",ToastAndroid.LONG);
      }else{
          Alert.alert("signInMethod","Name :"+name+" Password : "+password,[{text:"Ok"}])
      }

    }

    checkRePassword(text){
      ToastAndroid.show("repassword :"+text,ToastAndroid.LONG);
      this.setState({ repassword:text })

    }


 render() {

  const {parent,SignInTxtHolder, SignInTxt, formHolder, inputFields,buttonStyle,buttonHolder,orText} = styles


   return (

    

     <SafeAreaView style={parent}>

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
                  onChangeText={text => this.setState({ name:text })}
              />

              <TextInput
                  style={inputFields}
                  mode = 'outlined'
                  label= 'Telephone No.'
                  selectionColor='#115175'
                  value= {this.state.telephone}
                  onChangeText={text => this.setState({ telephone:text })}
                  keyboardType='phone-pad'
              />

              <TextInput
                  style={inputFields}
                  mode = 'outlined'
                  label= 'Email'
                  selectionColor='#115175'
                  value= {this.state.email}
                  keyboardType='email-address'
                  onChangeText={text => this.setState({ email:text })}
              />

              <TextInput
                  style={inputFields}
                  mode = 'outlined'
                  label= 'Password'
                  selectionColor='#115175'
                  value= {this.state.password}
                  onChangeText={text => this.setState({ password:text })}
                  secureTextEntry={true} 
              />

              <TextInput
                  style={inputFields}
                  mode = 'outlined'
                  label= 'Reenter the Password'
                  selectionColor='#115175'
                  value= {this.state.repassword}
                  onChangeText={text => this.checkRePassword(text)}
                  secureTextEntry={true} 
              />

            <View style={buttonHolder} >

                  <Button mode="contained" style={buttonStyle} onPress={_=>this.signInMethod()}>
                    SIGN IN
                  </Button>

                  <Text style={orText}>Or</Text>


                  <Button mode="contained" style={buttonStyle} onPress={()=>this.props.navigation.navigate('home')}> 
                    SIGN IN VIA FACEBOOK
                  </Button>

            </View>



          </View>
   </View>

   </SafeAreaView>
     
   );
 }
}

export default SignIn