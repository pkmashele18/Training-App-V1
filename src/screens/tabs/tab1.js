import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Label, Alert } from 'native-base';
//import ThumbnailImage from './assets/img/hackr.png'

//const ThumbnailImageUri = Image.resolveAssetSource(ThumbnailImage).uri

export default class ListThumbnailExample extends Component {

    add = () => {
        const value_1 = 1
        const value_2 = 2
        const sum = value_1 + value_2
        //Alert.alert("fffffff");
        console.warn(sum);
    }

  render() {
    return (
      <Container>
        <Content>

                <Button onPress={this.add} >
                  <Text>Add numbers</Text>
                </Button>
                 <Label>{this.sum}</Label>

        </Content>
      </Container>
    );
  }
}