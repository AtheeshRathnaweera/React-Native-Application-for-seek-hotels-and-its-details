import React,{Component} from 'react';
import {Platform, Text, View, SafeAreaView,TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import styles from './styles'
import CardComponent from '../CardComponent';
import SearchBarComponent from '../SearchBarComponent';
import { Container, Content } from 'native-base';


type Props = {};
class Home extends Component<Props> {

  static navigationOptions={
    header : null
  }

  state = {
    firstQuery: '',
  };

 render() {
  const {RecentSearchesTitleText,container,content} = styles
  const { firstQuery } = this.state;
  const { navigation } = this.props.navigation;

  const hotelNames = {
    "1" : "Ambalama Leisure Lounge",
    "2" : "Bentota Beach Hotel",
    "3" : "Belihuloya Rest House"
  }



   return (

   

       <Container >

          <SearchBarComponent/>

            <Text style={RecentSearchesTitleText} >Recent Searches</Text>
        
            <Content>

                <CardComponent hotelname="1" />
                <CardComponent hotelname="2" />
                <CardComponent hotelname="3" />

            </Content>
         </Container>

     
   );
 }
}

export default Home