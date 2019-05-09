import React,{Component} from 'react';
import styles from './styles'
import CardComponent from '../CardComponent';
import SearchBarComponent from '../SearchBarComponent';
import { Container, Header, Content, Footer, FooterTab, Button, Text , Body, Left, Right, 
        Title, Toast, List, ListItem, Thumbnail,Icon} from 'native-base';
import {Platform, View, SafeAreaView, Image,StyleSheet, TouchableWithoutFeedback,Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


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

  storeTheData(){

    async function getItem(item) {
      try {
        const value = await AsyncStorage.getItem(item);
        console.log(value);
        return value;
      } catch (error) {
        console.error("This is the error : "+e.message);
      }
    }

  }





  

 render() {
  const {footer, activeTab, parent} = styles
  const { firstQuery } = this.state;
  var resHotelName = this.props.navigation.getParam('hotelName', 'no');
 
  //recHotelName = this.props.navigation.state.params.hotelName;

  if(resHotelName == 'no'){
    console.debug("recHotelName is not found.");
  
    //get the saved value and set to resHotelName
    getData = async () => {
      try {
        const value =  AsyncStorage.getItem('hotelName')
        if(value !== null) {
          resHotelName = value;
          console.debug("rec value : "+value+" "+resHotelName);
        }else{
          console.debug("Value is null");
        }
      } catch(e) {
        console.error(e.message);
      }
    }


    console.debug("This is the stored value: "+resHotelName);
  }else{

    console.log("resHotelName is received correctly.");

 
     
        AsyncStorage.setItem('hotelName', resHotelName);
        console.debug("value stored.");

    
       
     
  
    
  }

   return (

    <Container style={parent}>

      
          <Header style={{alignItems:"center", backgroundColor: "#115175"}}>
        
            <Title style={{ color: '#ffff'}} > {resHotelName} </Title>
         
          </Header>
 
     
      <Content  style={{ flex:1}}>
          <List>

            <ListItem >
            
              <Body>
                <Image 
                 source={{ uri : 'http://www.offtoeurope.com/wp-content/uploads/2010/06/radisson-pool.jpg' }}
                 style={{ height:250, width: 330, alignSelf:"center" }}/>
              </Body>
             
            </ListItem>

            <ListItem avatar>
              <Left>
                  <Icon ios='ios-pin' android="md-pin" style={{fontSize:23, color: '#236a93', alignSelf: "center"}}/>
              </Left>
              <Body>
                <Text>Address</Text>
                <Text note>No.16, Wela Road, Pathiragoda, Maharagama.</Text>
              </Body>
             
            </ListItem>

            <ListItem avatar>
              <Left>
              <Icon ios='ios-phone-portrait' android="md-phone-portrait" style={{fontSize:23,color: '#236a93', alignSelf: "center"}}/>
              </Left>
              <Body>
                <Text>Contact</Text>
                <Text note>(+94) 112 778 050  /  (+94) 71 722 3371</Text>
              </Body>
            
            </ListItem>

            <ListItem avatar>
              <Left style={{ justifyContent: 'center', alignItems: "center"}}>
              <Icon ios='ios-link' android="md-link" style={{color: '#236a93'}}/>
              </Left>
              <Body>
                <Text>Website</Text>
                <Text note>http://ambalama.lk/</Text>
              </Body>
              
            </ListItem>

            <ListItem avatar>
              <Left style={{ justifyContent: 'center', alignItems: "center"}}>
              <Icon ios='ios-mail' android="md-mail" style={{color: '#236a93'}}/>
              </Left>
              <Body>
                <Text>Email</Text>
                <Text note>rathnaweeraastheesh72@gmail.com</Text>
              </Body>
              
            </ListItem>

            <ListItem avatar>
              <Left style={{ justifyContent: 'center', alignItems: "center"}}>
              <Icon ios= "ios-information-circle" android="md-information-circle" style={{color: '#236a93'}}/>
              </Left>
              <Body>
                <Text>About</Text>
                <Text note style={{ textAlign: 'justify' }}>Ambalama Leisure Lounge, Hanwella offers guests an
                 Eco friendly boutique hotel stay with a touch of sri lankan heritage and traditional hospitality.
                 The cottages and rooms resemble village cottages and give visitors an in depth idea of historic
                 Sri Lankan culture and architecture.Accommodation is available as cottages(A/C, non A/C), rooms(A/C, non A/C) 
                 and family cottage.The hotel is famous among locals and foreigners for providing a taste of 
                 sri lankan authentic food matched by no other and also for its captivating architecture ranging from the traditional sri lankan heritage to the dutch era.</Text>
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
        <Button onPress={()=> { this.props.navigation.replace('ratingsDisplay')}}>
          <Text>Ratings</Text>
        </Button>
        <Button onPress={()=> { this.props.navigation.replace('galleryDisplay')  }}>
          <Text>Gallery</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>

     
   );
 }
}

export default DisplayHotelDetails