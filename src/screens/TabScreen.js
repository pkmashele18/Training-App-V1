import React, { Component } from 'react';
import { Container, Header, Content, Left, Tab, Tabs, Right, Title, Body } from 'native-base';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#5f9ea0'}} hasTabs>
            <Body>
              <Title style={styles.header}>go _preneur</Title>
            </Body>
          <Right/>
        </Header>
        
        <Tabs>
          <Tab tabStyle={{backgroundColor: '#5f9ea0'}} heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#5f9ea0'}} heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#5f9ea0'}} heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingLeft: 1,
    paddingTop: 20
  }
});