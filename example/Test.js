import React, { Component } from 'react';
import CardView from 'react-native-cardview';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Slider
} from 'react-native';

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
      data: [
        { id: 1, addr: 'Hello' },
        { id: 2, addr: 'Hi, Nice to meet you' },
        { id: 3, addr: 'Hello, Nice to meet you too.' },
        { id: 4, addr: 'How are you?' }
      ]
    };
  }
  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value)
      };
    });
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
    const { data, value } = this.state;
    return (
      <View style={styles.container}>
        <CardView
          style={{
            backgroundColor: 'white'
          }}
          cardElevation={value}
          cardMaxElevation={value}
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

        <Slider
          style={{ width: 300, marginTop: 40 }}
          step={1}
          maximumValue={10}
          onValueChange={this.change.bind(this)}
          value={value}
        />

        <Text>{`cardElevation = ${value}`}</Text>
        <Text>{`cardMaxElevation = ${value}`}</Text>
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
