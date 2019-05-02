import React,{Component} from 'react';
import {Platform, Text, View, SafeAreaView} from 'react-native';
import styles from './styles'
import { TextInput, Button,Searchbar, Avatar, Card, Title, Paragraph } from 'react-native-paper';
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

   return (



       <Container >

          <SearchBarComponent/>

            <Text style={RecentSearchesTitleText} >Recent Searches</Text>

            <Content >
                <CardComponent/>

                <CardComponent/>

                <CardComponent/>
            </Content>
         </Container>

     
   );
 }
}

export default Home