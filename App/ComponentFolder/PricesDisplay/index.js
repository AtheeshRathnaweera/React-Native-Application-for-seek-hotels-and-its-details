import React,{Component} from 'react';
import styles from './styles'
import CardComponent from '../CardComponent';
import SearchBarComponent from '../SearchBarComponent';
import PriceComponent from '../PriceComponent'
import { Container, Header, Content, Footer, FooterTab, Button, Text , Body, Left, Right, Title} from 'native-base';


type Props = {};
class PricesDisplay extends Component<Props> {

  static navigationOptions={
    header : null
  }

  state = {
    firstQuery: '',
  };

  touchATab(){


  }

 render() {
 const {footer, activeTab} = styles
  const { firstQuery } = this.state;

   return (



    <Container>

    <Header style={{ alignContent:"center", alignItems:"center", backgroundColor: "#115175"}}>
        
    <Title > {'Ambalama Leisure Lounge'.toUpperCase()} </Title>
         
    </Header>

    <Content >
        <PriceComponent />
    </Content>

    <Footer>
      <FooterTab style={footer}>
        <Button active style={activeTab}>
          <Text>Prices</Text>
        </Button>
        <Button  onPress={()=> { this.props.navigation.replace('viewHotelDetails') }}>
          <Text >Details</Text>
        </Button>
        <Button onPress={()=> { this.props.navigation.replace('ratingsDisplay') }}>
          <Text>Ratings</Text>
        </Button>
        <Button onPress={()=> { this.props.navigation.replace('galleryDisplay') }}>
          <Text>Gallery</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>

     
   );
 }
}

export default PricesDisplay