import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default class SearchBarExample extends Component {
  render() {
    return (
     
        <Header searchBar rounded >
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Type the town" />
        
          </Item>
        
        </Header>
   
    );
  }
}