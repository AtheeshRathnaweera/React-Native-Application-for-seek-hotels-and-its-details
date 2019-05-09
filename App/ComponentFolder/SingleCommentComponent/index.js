import React,{Component} from 'react';
import {Platform, Text, View, SafeAreaView, Image,StyleSheet, TouchableWithoutFeedback,Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem,  Body, Right, Icon, Thumbnail } from "native-base";



class SingleCommentComponent extends Component{
    

    _OnCardPress(cardName) {
    
      }
    
    render(){

        const roomNames = {
            "1" : "Deluxe Double Room",
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

            <Container>
                <Content padder>
                <Card>
                <CardItem >
                            <Thumbnail source={require('./img/userImage.png')} />
                            <Text style={{fontSize: 17}}>  Atheesh Rathnaweera</Text>
                </CardItem>
                <CardItem bordered>

                <Body>
                     
                        <Text note >Comment will be shown here.</Text>
                </Body>

                </CardItem>
            
                </Card>
                </Content>
            </Container>

        

        );
    }
}


export default SingleCommentComponent;

const styles= StyleSheet.create({
    card : {
        marginLeft:10,
        marginRight:10,
        elevation: 5


    },
    roomType:{
        fontSize:17,
        fontFamily: 'Cochin',
        color: '#008b8b',
       
    },
    priceText:{
        fontSize:16,
        color: '#daa520',
        fontFamily: 'Cochin',
        fontWeight: 'bold'
        
    
      
    },
    details:{

        flexDirection: 'column'
    }


});