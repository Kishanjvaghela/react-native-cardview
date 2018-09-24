import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import {
  requireNativeComponent,
  View,
  PixelRatio,
  Platform
} from 'react-native';
var iface = {
  name: 'CardView',
  propTypes: {
    cornerRadius: PropTypes.number,
    cardElevation: PropTypes.number,
    cardMaxElevation: PropTypes.number,
    ...View.propTypes // include the default view properties
  }
};

const RNCardView = requireNativeComponent('RNCardView', iface);
class CardView extends Component {
  render() {
    if (Platform.Version < 21) {
      const { cardMaxElevation = 1, cornerRadius = 1 } = this.props;
      const maxCardElevationPx = PixelRatio.getPixelSizeForLayoutSize(
        cardMaxElevation
      );
      const cornerRadiusPx = PixelRatio.getPixelSizeForLayoutSize(cornerRadius);
      const cos45 = 0.52532198881;
      const paddingBottom =
        maxCardElevationPx * 1.5 + (1 - cos45) * cornerRadiusPx;
      const paddingRight = maxCardElevationPx + (1 - cos45) * cornerRadiusPx;
      // equation from https://developer.android.com/reference/android/support/v7/widget/CardView
      return (
        <RNCardView {...this.props}>
          <View
            style={{
              paddingRight,
              paddingBottom
            }}
          >
            {this.props.children}
          </View>
        </RNCardView>
      );
    } else {
      return <RNCardView {...this.props}>{this.props.children}</RNCardView>;
    }
  }
}

export default CardView;
