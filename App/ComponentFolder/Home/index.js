import React,{Component} from 'react';
import {Platform, Text, View, SafeAreaView,TouchableWithoutFeedback } from 'react-native';
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

   return (



       <Container >

          <SearchBarComponent/>

          <TouchableWithoutFeedback  nameofhotel = "Ambala Leisure Lounge"
          onPress={() => this.props.navigation.navigate('viewHotelDetails',{param:'SomeParameter'})} >

            <Text style={RecentSearchesTitleText} >Recent Searches</Text>

            </TouchableWithoutFeedback>
        

            <Content >

           
                <CardComponent hotelname="1" />
                <CardComponent hotelname="2" />

                <CardComponent hotelname="3" />
            </Content>
         </Container>

     
   );
 }
}

export default Home