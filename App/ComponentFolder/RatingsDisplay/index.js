import React,{Component} from 'react';
import styles from './styles'
import CardComponent from '../CardComponent';
import SearchBarComponent from '../SearchBarComponent';
import { Container, Header, Content, Footer, FooterTab, Button, Text , 
  ProgressBar,progress, List, ListItem, Title, Icon, CardItem} from 'native-base';
import SingleCommentComponent from '../SingleCommentComponent';


type Props = {};
class RatingsDisplay extends Component<Props> {

  static navigationOptions={
    header : null
  }

  state = {
    firstQuery: '',
  };

  touchATab(){


  }

 render() {
 const {footer, activeTab} = styles
  const { firstQuery } = this.state;

   return (
    <Container>

    <Header style={{ alignContent:"center", alignItems:"center" , backgroundColor: "#115175"}}>
        <Title > {'Ambalama Leisure Lounge'.toUpperCase()} </Title>
    </Header>

    <Content >
         <CardItem style = {{ flexDirection: 'row' , alignItems: 'center', justifyContent: 'center'}}> 
            <Icon ios='ios-star' android="md-star" style={{ color: '#daa520'}}/> 
            <Icon ios='ios-star' android="md-star" style={{ color: '#daa520'}}/> 
            <Icon ios='ios-star-outline' android="md-star-outline" style={{ color: '#daa520'}}/> 
            <Icon ios='ios-star-outline' android="md-star-outline" style={{ color: '#daa520'}}/> 
            <Icon ios='ios-star-outline' android="md-star-outline" style={{ color: '#daa520'}}/> 
          </CardItem>

          <CardItem style = {{ justifyContent: 'center'}}>
       
            <Text note style={{ fontSize: 16}}> Excellent</Text>

          </CardItem>

          <CardItem >
       
            <Text><Text>Comments</Text><Text> 12</Text></Text>
            <Text style={{ color: '#115175'}}> add a comment</Text>

          </CardItem>

          <Container>
                
                            <SingleCommentComponent/>
                       
                            <SingleCommentComponent/>
                        
                            <SingleCommentComponent/>
                    
          </Container>

    </Content>

    <Footer>
      <FooterTab style={footer}>
        <Button onPress={()=> { this.props.navigation.replace('pricesDisplay') }}>
          <Text>Prices</Text>
        </Button>
        <Button onPress={()=> { this.props.navigation.replace('viewHotelDetails') }}>
          <Text >Details</Text>
        </Button>
        <Button active style={activeTab}>
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

export default RatingsDisplay