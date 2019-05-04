
import React,{Component} from 'react';
import {Platform, Text, View, SafeAreaView, Image,StyleSheet, TouchableWithoutFeedback,Alert} from 'react-native';
import { Card, CardItem,Thumbnail, Body, Left, Right,Button,Icon, Container} from 'native-base';



class CardComponent extends Component{
    

    _OnCardPress(cardName) {
    
      }
    
    render(){

        const hotelNames = {
            "1" : "Ambalama Leisure Lounge",
            "2" : "Bentota Beach Hotel",
            "3" : "Belihuloya Rest House"
        }

        const hotelImages = {
            "1" : "http://www.offtoeurope.com/wp-content/uploads/2010/06/radisson-pool.jpg",
            "2" : "http://images.kuoni.co.uk/73/mount-lavinia-23194261-1498470125-ImageGalleryLightboxLarge.jpg",
            "3" : "http://images.kuoni.co.uk/73/anantara-kalutara-40466867-1481897600-ImageGalleryLightboxLarge.jpg"
        }

        const hotelLocations = {

            "1" : "Hanwella",
            "2" : "Bentota",
            "3" : "Belihuloya"
        }

        return(

            <TouchableWithoutFeedback   onPress={() => this.props.navigation.navigate('viewHotelDetails')}>

            <Card style={styles.card}  >

              <CardItem>
              <Body>

                <Image 
                 source={ { uri : hotelImages[this.props.hotelname] }}
                 style={{ height:240, width: 310 }}
               />
        
              </Body>

             
             </CardItem>

              <CardItem  style={{ backgroundColor: '#115175' }}>

              <Body >
                     <Text style={styles.hotelName} > {hotelNames[this.props.hotelname]} </Text>
                     <Text style={styles.hotelLocation} > {hotelLocations[this.props.hotelname]} </Text>
              </Body>

            </CardItem>

            </Card>

            </TouchableWithoutFeedback> 

        

        );
    }
}


export default CardComponent;

const styles= StyleSheet.create({
    card : {
        marginLeft:10,
        marginRight:10,
        elevation: 5


    },
    hotelName:{
        fontSize:19,
        fontFamily: 'Cochin',
        color: 'white',
       
    },
    hotelLocation:{
        fontSize:15,
        color: 'white',
        fontFamily: 'LetterGothicItalic'
    
      
    },
    details:{

        flexDirection: 'column'
    }


});