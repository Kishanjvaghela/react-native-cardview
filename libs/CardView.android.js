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
      const maxCardElevation = PixelRatio.getPixelSizeForLayoutSize(
        this.props.cardMaxElevation
      );
      const cornerRadius = PixelRatio.getPixelSizeForLayoutSize(
        this.props.cornerRadius
      );
      const cos45 = 0.52532198881;
      const value = maxCardElevation * 1.5 + (1 - cos45) * cornerRadius;
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
RNCardView.defaultProps = {
  cornerRadius: 0,
  cardElevation: 0,
  cardMaxElevation: 0
};

RNCardView.propTypes = {
  cornerRadius: PropTypes.number,
  cardElevation: PropTypes.number,
  cardMaxElevation: PropTypes.number
};

export default CardView;
