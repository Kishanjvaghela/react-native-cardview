import React, { Component } from 'react';
import { View } from 'react-native';

export default class CardView extends Component {
  render() {
    const { cardElevation, cornerRadius } = this.props;
    if(cardElevation > 0) {
      return(
        <View style={[{
          shadowOffset: {
            width: 0,
            height: cardElevation
          },
          shadowRadius: cardElevation,
          shadowOpacity: 0.24,
          borderRadius: cornerRadius,
        }, this.props.style]}>
          {this.props.children}
        </View>
      );
    } else {
      return(
        <View style={[{
          borderRadius: cornerRadius,
        }, this.props.style]}>
          {this.props.children}
        </View>
      );
    }

  }
}
