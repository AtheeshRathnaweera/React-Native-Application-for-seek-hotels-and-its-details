import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    parent:{
        flex:1,
       // backgroundColor: 'rgb(237,249,249)',
        flexDirection: 'column',
   
        //alignItems: 'center'
    },
    container:{
        flex:1,
      backgroundColor: 'white'
    },
    footer:{
      backgroundColor: '#115175'
    
    },
    activeTab:{
        backgroundColor: '#236a93'
      
      },
     
   
    RecentSearchesTitleText:{
    
        marginRight:10,
        marginLeft:10,
        marginBottom:10,
        marginTop:10,
        fontSize:16,
        color:'black'
    
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

    },
    orText:{
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 5


    },



})