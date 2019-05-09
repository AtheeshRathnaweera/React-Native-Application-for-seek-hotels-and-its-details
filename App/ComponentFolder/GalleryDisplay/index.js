import React,{Component} from 'react';
import styles from './styles'
import CardComponent from '../CardComponent';
import SearchBarComponent from '../SearchBarComponent';
import { Container, Header, Content, Footer, FooterTab, Button, Text , Body, Left, Right, Title} from 'native-base';


type Props = {};
class GalleryDisplay extends Component<Props> {

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

    <Header style={{ alignContent:"center", alignItems:"center" , backgroundColor: "#115175"}}>
        
        <Title style={{ color: '#ffff'}} > {this.props.navigation.state.params.hotelName} </Title>
         
    </Header>

    <Content >
            <Text style={{ alignContent:"center", alignItems:"center"}}>This is the Gallery Display tab</Text>
    </Content>

    <Footer>
      <FooterTab style={footer}>
        <Button onPress={()=> { this.props.navigation.replace('pricesDisplay') }}>
          <Text>Prices</Text>
        </Button>
        <Button onPress={()=> { this.props.navigation.replace('viewHotelDetails') }}>
          <Text >Details</Text>
        </Button >
        <Button onPress={()=> { this.props.navigation.replace('ratingsDisplay') }}>
          <Text>Ratings</Text>
        </Button>
        <Button active style={activeTab}>
          <Text>Gallery</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>

     
   );
 }
}

export default GalleryDisplay