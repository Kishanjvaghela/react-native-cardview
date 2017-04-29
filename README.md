
# react-native-card-view [![npm version](https://img.shields.io/npm/v/react-native-cardview.svg?style=flat)](https://www.npmjs.com/package/react-native-cardview)

Native CardView that compatible for iOS and Android( both lollipop and pre-lolipop).

##### [Website](https://kishanjvaghela.github.io/react-native-cardview/)
##### [NPM url](https://www.npmjs.com/package/react-native-cardview)
##### [Material Design Card Spec](https://www.google.com/design/spec/components/cards.html)
##### [CardView Android Documentation](http://developer.android.com/intl/zh-tw/reference/android/support/v7/widget/CardView.html)



## Getting started

`$ npm install react-native-card-view --save`

### Mostly automatic installation

`$ react-native link react-native-card-view`

### Manual installation

#### iOS

Dont need to setup

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNCardViewPackage;` to the imports at the top of the file
  - Add `new RNCardViewPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-card-view'
  	project(':react-native-card-view').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-card-view/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-card-view')
  	```
## Usage

![N|Example](https://github.com/Kishanjvaghela/react-native-card-view/raw/master/docs/Example-Snapshot.png)

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
  
