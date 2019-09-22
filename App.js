/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Content,
  List,
  ListItem,
  Text,
} from 'native-base';

const App = () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>
            <Text>Header</Text>
          </Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <List>
          <ListItem itemHeader first>
            <Text>COMEDY</Text>
          </ListItem>
          <ListItem>
            <Text>Hangover</Text>
          </ListItem>
          <ListItem last>
            <Text>Cop Out</Text>
          </ListItem>
          <ListItem itemHeader>
            <Text>ACTION</Text>
          </ListItem>
          <ListItem>
            <Text>Terminator Genesis</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default App;
