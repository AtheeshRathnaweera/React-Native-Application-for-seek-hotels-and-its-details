
import React, {Component} from 'react';
import {Platform, Text, View, Alert, ToastAndroid} from 'react-native';
import styles from './styles'
import { TextInput} from 'react-native-paper';
import { Container, Content, Button, Icon, Grid, Col } from 'native-base';

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

    <Container >


    

        <Content contentContainerStyle={{flex: 1}} >

         <Grid style={{ alignItems: 'center'}}>

         <Col>

         <Button block iconLeft danger style={{ marginRight: 10, marginLeft: 10}}>
            <Icon name='logo-google' />
            <Text style={ {color:'#ffff', fontSize: 19}}>    Login with GOOGLE</Text>
          </Button>

          <Button block iconLeft style={{ marginRight: 10, marginLeft: 10, marginTop:9}} >
            <Icon name='logo-facebook' />
            <Text style={ {color:'#ffff', fontSize: 19}}>    or with FACEBOOK</Text>
          </Button>


         </Col>

         </Grid>

        
          

        </Content>

    </Container>


     
   );
 }
}

export default Welcome