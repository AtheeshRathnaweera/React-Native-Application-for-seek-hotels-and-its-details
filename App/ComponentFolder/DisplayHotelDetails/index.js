import React,{Component} from 'react';
import styles from './styles'
import CardComponent from '../CardComponent';
import SearchBarComponent from '../SearchBarComponent';
import { Container, Header, Content, Footer, FooterTab, Button, Text , Body, Left, Right, 
        Title, Toast, List, ListItem, Thumbnail,Icon} from 'native-base';
import {Platform, View, SafeAreaView, Image,StyleSheet, TouchableWithoutFeedback,Alert} from 'react-native';


type Props = {};
class DisplayHotelDetails extends Component<Props> {

  static navigationOptions={
    header : null
  }

  state = {
    firstQuery: '',
  };

  touchATab(){


  }

 render() {
  const {footer, activeTab, parent} = styles
  const { firstQuery } = this.state;

   return (

    <Container style={parent}>

      {console.log("This is the props "+this.props.someParameter)}
      
          <Header style={{alignItems:"center", backgroundColor: "#115175"}}>
        
            <Title > {'Ambalama Leisure Lounge'.toUpperCase()} </Title>
         
          </Header>

     

      <Content style={{ flex:1 }}>
              <Image 
                 source={ { uri : 'http://www.offtoeurope.com/wp-content/uploads/2010/06/radisson-pool.jpg' }}
                 style={{ flex:1, height:250, width: 330, alignSelf:"center" }}/>

      </Content>

     
      <Content  style={{ flex:1}}>
          <List>
            <ListItem avatar>
              <Left>
                  <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: '#236a93', alignSelf: "center"}}/>
              </Left>
              <Body>
                <Text>Address</Text>
                <Text note>No.16, Wela Road, Pathiragoda, Maharagama.</Text>
              </Body>
             
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'http://www.offtoeurope.com/wp-content/uploads/2010/06/radisson-pool.jpg' }} />
              </Left>
              <Body>
                <Text>Contact</Text>
                <Text note> (+94) 112 778 050 </Text>
              </Body>
            
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'http://www.offtoeurope.com/wp-content/uploads/2010/06/radisson-pool.jpg' }} />
              </Left>
              <Body>
                <Text>Email</Text>
                <Text note>rathnaweeraastheesh72@gmail.com</Text>
              </Body>
              
            </ListItem>


          </List>
        </Content>

    <Footer >
      <FooterTab style={footer}>
        <Button onPress={()=> { this.props.navigation.replace('pricesDisplay') }} >
          <Text>Prices</Text>
        </Button>
        <Button active style={activeTab}>
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

export default DisplayHotelDetails