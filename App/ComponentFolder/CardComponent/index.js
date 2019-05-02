
import React,{Component} from 'react';
import {Platform, Text, View, SafeAreaView, Image,StyleSheet} from 'react-native';
import { Card, CardItem,Thumbnail, Body, Left, Right,Button,Icon, Container} from 'native-base';



class CardComponent extends Component{
    render(){

        return(
            <Card style={styles.card}>

        


              <CardItem>
              <Body>
                <Image source={{uri: 'http://www.offtoeurope.com/wp-content/uploads/2010/06/radisson-pool.jpg'}}
                 style={{height: 200, width: 310}}/>
        
              </Body>

             
            </CardItem>

              <CardItem >

              <Body >
                     <Text style={styles.hotelName}>Hotel Name</Text>
                     <Text>Hotel Name</Text>
                  </Body>


             
            </CardItem>

              
              
            </Card>

        );
    }
}


export default CardComponent;

const styles= StyleSheet.create({
    card : {
        marginLeft:10,
        marginRight:10

    },
    hotelName:{
        fontSize:18,
        fontFamily: 'FontAwesome5_Brands'
    },
    details:{

        flexDirection: 'column'
    }


});