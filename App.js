import React, { Component } from 'react';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title,  Tab, Tabs, Thumbnail } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3 from './Tabs/tab3';
import Tab4 from './Tabs/tab4';
import Tab5 from './Tabs/tab5';

export default class HeaderExample extends Component {
  render() {
    return (
      <Container>
        <Content style={{backgroundColor: '#232429'}}>

          <Header style={{ backgroundColor: '#000', height: 40, marginTop: 25 }}>
            <Left>
              {/* <Button transparent>
                <Icon name='arrow-back' />
              </Button> */}
            </Left>
            <Body>
              <Title>Spark</Title>
            </Body>
            <Right>
              <Thumbnail small source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Right>
          </Header>

          
          <Tabs tabBarUnderlineStyle={{borderBottomWidth:0, backgroundColor: '#E1AD77'}}>

            <Tab heading="Home" tabStyle={{backgroundColor: '#232429'}} textStyle={{color: '#fff',fontWeight: 'bold', fontSize: 12}} activeTabStyle={{backgroundColor: '#232429'}} activeTextStyle={{color: '#E1AD77', fontWeight: 'bold', fontSize: 12}}>
              <Tab1 />
            </Tab>
            <Tab heading="Videos" tabStyle={{backgroundColor: '#232429'}} textStyle={{color: '#fff',fontWeight: 'bold', fontSize: 12}} activeTabStyle={{backgroundColor: '#232429'}} activeTextStyle={{color: '#E1AD77', fontWeight: 'bold', fontSize: 12}}>
              <Tab2 />
            </Tab>
            <Tab heading="Playlists" tabStyle={{backgroundColor: '#232429'}} textStyle={{color: '#fff',fontWeight: 'bold', fontSize: 12}} activeTabStyle={{backgroundColor: '#232429'}} activeTextStyle={{color: '#E1AD77', fontWeight: 'bold', fontSize: 12}}>
              <Tab3 />
            </Tab>
            <Tab heading="Community" tabStyle={{backgroundColor: '#232429'}} textStyle={{color: '#fff',fontWeight: 'bold', fontSize: 12}} activeTabStyle={{backgroundColor: '#232429'}} activeTextStyle={{color: '#E1AD77', fontWeight: 'bold', fontSize: 12}}>
              <Tab4 />
            </Tab>
            <Tab heading="Characters" tabStyle={{backgroundColor: '#232429'}} textStyle={{color: '#fff',fontWeight: 'bold', fontSize: 12}} activeTabStyle={{backgroundColor: '#232429'}} activeTextStyle={{color: '#E1AD77', fontWeight: 'bold', fontSize: 12}}>
              <Tab5 />
            </Tab>

          </Tabs>

          </Content>

      </Container>
    );
  }
}




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });