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
          cardMaxElevation={0}
          cornerRadius={5}
          style={styles.card}>
          <Text style={styles.text}>
              Elevation 0
          </Text>
        </CardView>
        <CardView
          cardElevation={1}
          cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}>
          <Text style={styles.text}>
              Elevation 1
          </Text>
        </CardView>
      </View>
      <View flexDirection='row'>
      <CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={styles.card}>
        <Text style={styles.text}>
            Elevation 2
        </Text>
      </CardView>
      <CardView
        cardElevation={3}
        cardMaxElevation={3}
        cornerRadius={5}
        style={styles.card}>
        <Text style={styles.text}>
            Elevation 3
        </Text>
      </CardView>
      </View>
      <View flexDirection='row'>
      <CardView
        cardElevation={4}
        cardMaxElevation={4}
        cornerRadius={5}
        style={styles.card}>
        <Text style={styles.text}>
            Elevation 4
        </Text>
      </CardView>
      <CardView
        cardElevation={5}
        cardMaxElevation={5}
        cornerRadius={5}
        style={styles.card}>
        <Text style={styles.text}>
            Elevation 5
        </Text>
      </CardView>
      </View>
      <View flexDirection='row'>
      <CardView
        cardElevation={6}
        cardMaxElevation={6}
        cornerRadius={5}
        style={styles.card}>
        <Text style={styles.text}>
            Elevation 6
        </Text>
      </CardView>
      <CardView
        cardElevation={7}
        cardMaxElevation={7}
        cornerRadius={5}
        style={styles.card}>
        <Text style={styles.text}>
            Elevation 7
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
