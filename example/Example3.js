/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CardView from 'react-native-cardview';

export default class Example3 extends Component {
  render() {
    return (
      <SafeAreaView>
        <CardView
          cardElevation={3}
          cardMaxElevation={3}
          cornerRadius={3}
          style={{
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            backgroundColor: '#ffffff'
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end', //changed justifyContent value to center
              backgroundColor: 'red'
            }}
          >
            <Text
              style={{
                color: '#000000',
                fontSize: 12,
                backgroundColor: 'pink',
                textAlign: 'center'
              }}
            >
              Helloo
            </Text>
          </View>
        </CardView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: '#EEEEEE',
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
    margin: 10
  },
  text: {
    textAlign: 'center',
    margin: 10,
    height: 75
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
