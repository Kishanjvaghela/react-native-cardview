import React, { Component } from 'react';
import CardView from 'react-native-cardview';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, addr: 'Hello' },
        { id: 2, addr: 'Hi, Nice to meet you' },
        { id: 3, addr: 'Hello, Nice to meet you too.' },
        { id: 4, addr: 'How are you?' }
      ]
    };
  }

  deleteData(id) {
    let filteredData = this.state.data.filter(item => {
      return item.id !== id;
    });
    this.setState({
      data: filteredData
    });
  }

  renderData(data) {
    if (data.length === 0) {
      return (
        <Text style={{ textAlign: 'center', padding: 10 }}>Data Empty</Text>
      );
    }
    return data.map(item => {
      return (
        <View
          key={item.id}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between'
          }}
        >
          <Text>{item.addr}</Text>
          <TouchableOpacity
            style={{ justifyContent: 'center' }}
            onPress={() => this.deleteData(item.id)}
          >
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      );
    });
  }

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <CardView
          style={{
            backgroundColor: 'white'
          }}
          cornerRadius={5}
          cornerOverlap={false}
        >
          <View style={{ width: 300 }}>
            <View
              style={{
                padding: 10,
                borderBottomColor: '#e3e3e3',
                borderBottomWidth: 1
              }}
            >
              <Text style={{ fontSize: 16, color: 'black' }}>
                User Information
              </Text>
            </View>
            <View>{this.renderData(data)}</View>
          </View>
        </CardView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
