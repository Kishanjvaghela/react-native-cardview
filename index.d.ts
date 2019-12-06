import * as React from 'react'
import {
    ViewStyle,
    ViewProperties,
    TextStyle,
    ViewProps,
} from 'react-native'

export interface ICardViewProps extends ViewProps {
    /**
     * (Android/iOS) - An attribute to set the elevation of the card.
     * This will increase the 'drop-shadow' of the card.
     * There can be some performance impact when using a very high elevation value.
     */
    cornerRadius?: number,
    /**
     *  (Android) - An attribute to support shadow on pre-lollipop device in android.
     *  http://developer.android.com/intl/zh-tw/reference/android/support/v7/widget/CardView.html
     */
    cardElevation?: number,
    /**
     * (Android/iOS) - An attribute to set the radius of the card.
     */
    cardMaxElevation?: number,
    /**
     * (Android) - CardView adds additional padding to draw shadows on platforms before Lollipop.
     * https://developer.android.com/reference/android/support/v7/widget/CardView.html#setUseCompatPadding(boolean)
     */
    useCompatPadding?: boolean,
    /**
     * (Android) - On pre-Lollipop platforms, CardView does not clip the bounds of the Card for the rounded corners.
     * Instead, it adds padding to content so that it won't overlap with the rounded corners.
     * You can disable this behavior by setting this field to false.
     * https://developer.android.com/reference/android/support/v7/widget/CardView.html#setPreventCornerOverlap(boolean)
     */
    cornerOverlap?: boolean
}

export default class CardView extends React.Component<ICardViewProps>{

}
