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
    cornerOverlap: PropTypes.bool,
    useCompatPadding: PropTypes.bool,
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
      const value = maxCardElevationPx * 1.5 + (1 - cos45) * cornerRadiusPx;
      return (
        <RNCardView {...this.props}>
          <View style={{ paddingBottom: value }}>{this.props.children}</View>
        </RNCardView>
      );
    } else {
      return <RNCardView {...this.props}>{this.props.children}</RNCardView>;
    }
  }
}

export default CardView;
