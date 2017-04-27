/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CardView from 'react-native-cardview'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View flexDirection='row'>
        <CardView
          cardElevation={0}
          cardMaxElevation={30}
          cornerRadius={5}
          style={styles.card}>
          <Text style={styles.text}>
              Elevation 0
          </Text>
        </CardView>
        <CardView
          cardElevation={5}
          cardMaxElevation={30}
          cornerRadius={5}
          style={styles.card}>
          <Text style={styles.text}>
              Elevation 5
          </Text>
        </CardView>
      </View>
      <View flexDirection='row'>
      <CardView
        cardElevation={10}
        cardMaxElevation={30}
        cornerRadius={5}
        style={styles.card}>
        <Text style={styles.text}>
            Elevation 10
        </Text>
      </CardView>
      <CardView
        cardElevation={15}
        cardMaxElevation={30}
        cornerRadius={5}
        style={styles.card}>
        <Text style={styles.text}>
            Elevation 15
        </Text>
      </CardView>
      </View>
      <View flexDirection='row'>
      <CardView
        cardElevation={20}
        cardMaxElevation={30}
        cornerRadius={5}
        style={styles.card}>
        <Text style={styles.text}>
            Elevation 20
        </Text>
      </CardView>
      <CardView
        cardElevation={25}
        cardMaxElevation={30}
        cornerRadius={5}
        style={styles.card}>
        <Text style={styles.text}>
            Elevation 25
        </Text>
      </CardView>
      </View>
      <View flexDirection='row'>
      <CardView
        cardElevation={30}
        cardMaxElevation={30}
        cornerRadius={5}
        style={styles.card}>
        <Text style={styles.text}>
            Elevation 30
        </Text>
      </CardView>
      <CardView
        cardElevation={35}
        cardMaxElevation={30}
        cornerRadius={5}
        style={styles.card}>
        <Text style={styles.text}>
            Elevation 35
        </Text>
      </CardView>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
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
    marginBottom: 5,
  },
});
