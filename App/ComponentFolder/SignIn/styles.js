import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    parent:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: 'rgb(237,249,249)',
    
        flexDirection: 'column'
    },
    SignInTxtHolder:{
        flex:1,
        color: 'skyblue',
        justifyContent:'center'
    
    },
    SignInTxt:{
        fontSize: 60,
        textAlign: 'center',
        color: '#115175',
        fontFamily: 'lucida grande'
    },
    formHolder:{
        flex:4,
        flexDirection: 'column'
    },
    inputFields:{
        marginRight:10,
        marginLeft:10,
        marginBottom:5
    
    },
    buttonStyle:{
        //backgroundColor: 'royalblue',
        backgroundColor: '#115175',
        marginRight:10,
        marginLeft:10,
        marginBottom:5
    },
    buttonHolder:{
        flex:1,
        flexDirection: 'column',
        marginTop:15

    }



})