import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    welcomeTxt:{
        fontSize: 60,
        textAlign: 'center',
        color: '#115175',
        fontFamily: 'lucida grande'
    },

    input:{
        marginLeft: 20,
        marginRight: 20

    },

    welcomeTxtHolder:{
        flex:1,
        color: 'skyblue',
    
    },

    formHolder:{
        flex:2,
        flexDirection: 'column'
    },

    parent:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: 'rgb(237,249,249)',
    
        flexDirection: 'column'
    },
    upperBox:{
        flex:1
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
    signinHereText:{
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 5


    },
    signinhereHolder:{
        flex:1,
        flexDirection: 'column'

    },
    logInButtonHolder:{
        flex:1,
        flexDirection: 'column',
        marginTop:5

    }




})