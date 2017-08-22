
# react-native-card-view [![npm version](https://img.shields.io/npm/v/react-native-cardview.svg?style=flat)](https://www.npmjs.com/package/react-native-cardview) [![npm downloads](https://img.shields.io/npm/dm/react-native-cardview.svg?style=flat-square)](https://www.npmjs.com/package/react-native-cardview)

[![npm](https://nodei.co/npm/react-native-cardview.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/react-native-cardview)

Native CardView that compatible for iOS and Android( both lollipop and pre-lolipop).

##### [Website](https://kishanjvaghela.github.io/react-native-cardview/)
##### [Material Design Card Spec](https://www.google.com/design/spec/components/cards.html)
##### [CardView Android Documentation](http://developer.android.com/intl/zh-tw/reference/android/support/v7/widget/CardView.html)



## Getting started

`$ npm install react-native-cardview --save`

### Mostly automatic installation

`$ react-native link react-native-cardview`

### Manual installation

#### iOS

Dont need to setup

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.RNCardViewPackage;` to the imports at the top of the file
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

##### [Example](https://github.com/Kishanjvaghela/react-native-cardview-example)
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
## Attributes

* **cardElevation**

An attribute to set the elevation of the card. This will increase the 'drop-shadow' of the card.
There can be some performance impact when using a very high elevation value.

* **cardMaxElevation**

An attribute to support shadow on pre-lollipop device in android. [cardMaxElevation](http://developer.android.com/intl/zh-tw/reference/android/support/v7/widget/CardView.html)


* **cornerRadius**
An attribute to set the radius of the card.
  
