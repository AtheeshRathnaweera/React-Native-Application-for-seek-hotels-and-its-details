import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    parent:{
        flex:1,
        backgroundColor: 'rgb(237,249,249)',
        flexDirection: 'column'
    },
    SearchHolder:{
        flex:1,
        color: 'skyblue',
        justifyContent:'center',
        marginRight:10,
        marginLeft:10
    
    },
   
    RecentSearches:{
        flex:4,
        flexDirection: 'column',
        marginLeft:10,
        marginRight:10
    },
    RecentSearchesTitleText:{
    
        marginRight:10,
        marginLeft:10,
        marginBottom:10,
        fontSize:17
    
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