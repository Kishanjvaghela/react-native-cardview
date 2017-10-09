import { PropTypes } from 'prop-types';
import { requireNativeComponent, View } from 'react-native';
var iface = {
  name: 'CardView',
  propTypes: {
     cornerRadius: PropTypes.number,
     cardElevation: PropTypes.number,
cardMaxElevation: PropTypes.number,
    ...View.propTypes, // include the default view properties
  },
};
module.exports = requireNativeComponent('RNCardView', iface);

// const RNCardView = requireNativeComponent('RNCardView', CardView, {});
// class CardView extends Component {
//   render() {
//     return (
//       <RNCardView
//         {...this.props}
//       >
// 	{this.props.children}
//       </RNCardView>
//     );
//   }
// }
//
// CardView.propTypes = {
//   ...View.propTypes,
//   cornerRadius: PropTypes.number,
//   cardElevation: PropTypes.number,
//   cardMaxElevation: PropTypes.number,
// };
//
//
// export default CardView;
