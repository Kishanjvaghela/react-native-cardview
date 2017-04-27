import React, { Component } from 'react';
import { View } from 'react-native';

export default class CardView extends Component {
  render() {
    const { cardElevation, cornerRadius } = this.props;
    const ambientAlpha = (cardElevation + 10 + (cardElevation / 9.38)) / 100;
    // const color = "rgba(0, 0, 0, "+ambientAlpha+")";
    return(
      <View style={{
        // shadowColor: color,
        shadowOffset: {
          width: 0,
          height: cardElevation
        },
        shadowRadius: cardElevation,
        shadowOpacity: 0.24
      }}>
        {this.props.children}
      </View>
    );
  }
}
