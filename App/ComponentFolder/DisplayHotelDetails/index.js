import React,{Component} from 'react';
import {Platform, Text, View, SafeAreaView} from 'react-native';
import styles from './styles'
import CardComponent from '../CardComponent';
import SearchBarComponent from '../SearchBarComponent';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';


type Props = {};
class DisplayHotelDetails extends Component<Props> {

  static navigationOptions={
    header : null
  }

  state = {
    firstQuery: '',
  };

 render() {
 // const {RecentSearchesTitleText,container,content} = styles
  const { firstQuery } = this.state;

   return (



    <Container>
    <Header />
    <Content />
    <Footer>
      <FooterTab>
        <Button>
          <Text>Apps</Text>
        </Button>
        <Button>
          <Text>Camera</Text>
        </Button>
        <Button active>
          <Text>Navigate</Text>
        </Button>
        <Button>
          <Text>Contact</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>

     
   );
 }
}

export default DisplayHotelDetails