import React,{Component} from 'react';
import {Platform, Text, View, SafeAreaView} from 'react-native';
import styles from './styles'
import { TextInput, Button,Searchbar, Avatar, Card, Title, Paragraph } from 'react-native-paper';
import CardComponent from '../CardComponent';
import { Container, Content } from 'native-base';


type Props = {};
class Home extends Component<Props> {

  static navigationOptions={
    header : null
  }

  state = {
    firstQuery: '',
  };

 render() {
  const {logInButtonHolder,SearchHolder,RecentSearches,buttonStyle, RecentSearchesTitleText,upperBox,parent,
    welcomeTxtHolder, welcomeTxt, formHolder } = styles
  const { firstQuery } = this.state;

   return (

    <SafeAreaView style={parent}>


     <View  style={parent}>
          <View style={SearchHolder}>
              <Searchbar
                  placeholder="Type the town"
                  onChangeText={query => { this.setState({ firstQuery: query }); }}
                  value={firstQuery}
                />

       </View>

       <Text style={RecentSearchesTitleText}>Recent Searches</Text>

       <Container>
            <Content>
                <CardComponent/>
              </Content>
         </Container>

  

       
     </View>

     </SafeAreaView>
     
   );
 }
}

export default Home