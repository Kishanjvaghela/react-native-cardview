# react-native-card-view [![npm version](https://img.shields.io/npm/v/react-native-cardview.svg?style=flat)](https://www.npmjs.com/package/react-native-cardview) [![npm downloads](https://img.shields.io/npm/dm/react-native-cardview.svg?style=flat-square)](https://www.npmjs.com/package/react-native-cardview) ![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-yellow.svg) ![MIT](https://img.shields.io/dub/l/vibe-d.svg)

[![npm](https://nodei.co/npm/react-native-cardview.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/react-native-cardview)

Native CardView that compatible for iOS and Android( both lollipop and pre-lolipop).

##### [Website](https://kishanjvaghela.github.io/react-native-cardview/)

##### [Material Design Card Spec](https://www.google.com/design/spec/components/cards.html)

##### [CardView Android Documentation](http://developer.android.com/intl/zh-tw/reference/android/support/v7/widget/CardView.html)

## Getting started

```bash
$ npm install react-native-cardview --save
# --- or ---
$ yarn add react-native-cardview
```

### Mostly automatic installation

`$ react-native link react-native-cardview`

### Manual installation

#### iOS

Dont need to setup

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`

- Add `import com.kishanjvaghela.cardview.RNCardViewPackage;` to the imports at the top of the file
- Add `new RNCardViewPackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':react-native-cardview'
   project(':react-native-cardview').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-cardview/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
     compile project(':react-native-cardview')
   ```

## Usage

![N|Example](https://github.com/Kishanjvaghela/react-native-cardview/raw/master/docs/Example-Snapshot.png)

![N|Example](https://github.com/Kishanjvaghela/react-native-cardview/raw/master/docs/ezgif-4-b87dbfaf72.gif)


## Example

Browse the files in the [/example](https://github.com/Kishanjvaghela/react-native-cardview/tree/master/example) directory.

```javascript
import CardView from 'react-native-cardview'
<CardView
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={5}>
          <Text>
              Elevation 0
          </Text>
</CardView>
```

You can also follow
- https://reactnativecode.com/creating-card-view-in-android-ios-app-example/
- http://androidseekho.com/others/reactnative/how-to-use-card-view-in-react-native

## Attributes

- **cardElevation** (Android/iOS)

An attribute to set the elevation of the card. This will increase the 'drop-shadow' of the card.
There can be some performance impact when using a very high elevation value.

- **cardMaxElevation** (Android)

An attribute to support shadow on pre-lollipop device in android. [cardMaxElevation](http://developer.android.com/intl/zh-tw/reference/android/support/v7/widget/CardView.html)

- **cornerRadius** (Android/iOS)
  An attribute to set the radius of the card.

- **useCompatPadding** (Android)

CardView adds additional padding to draw shadows on platforms before Lollipop. [setUseCompatPadding](https://developer.android.com/reference/android/support/v7/widget/CardView.html#setUseCompatPadding(boolean))

- **cornerOverlap** (Android)

On pre-Lollipop platforms, CardView does not clip the bounds of the Card for the rounded corners. Instead, it adds padding to content so that it won't overlap with the rounded corners. You can disable this behavior by setting this field to false.

Setting this value on Lollipop and above does not have any effect unless you have enabled compatibility padding. 

[setPreventCornerOverlap](https://developer.android.com/reference/android/support/v7/widget/CardView.html#setPreventCornerOverlap(boolean))
