import React, { Component } from 'react';
import CardView from 'react-native-cardview';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Test extends Component {
constructor() {
super();
this.state = {
data: [
{id: 1, addr: "Hello"},
{id: 2, addr: "Hi, Nice to meet you"},
{id: 3, addr: "Hello, Nice to meet you too."},
{id: 4, addr: "How are you?"}
]
}
}

deleteData(id) {
let filteredData = this.state.data.filter((item) => {
return item.id !== id;
})
this.setState({
data: filteredData
})
}

renderData(data) {
return data.map((item) => {
return(
<View key={item.id} style={{flexDirection: 'row', paddingTop: 5}}>
<View style={{flex: .6, paddingLeft: 10}}>
<Text>{item.addr}</Text>
</View>
<TouchableOpacity
style={{flex: .2}}
onPress={() => this.deleteData(item.id)}
>
<Text>Delete</Text>
</TouchableOpacity>
</View>
)
});
}

render() {
const {data} = this.state;
return (
<View style={styles.container}>
<CardView
style={{paddingBottom: 20, width: 300}}
cardElevation={2}
cardMaxElevation={2}
cornerRadius={5}
>
  <View>

<Text style={{fontSize: 16, backgroundColor:'red'}}>User Information</Text>
<Text style={{backgroundColor:'pink'}}>
  Test
</Text>
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
backgroundColor: '#F5FCFF',
},
});
