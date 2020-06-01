import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import {WebView} from 'react-native-webview';

export default function App() {
  return (
      <View style={styles.conatiner}>
        <WebView
            source={{uri:'http://192.168.0.14:8080/frontend?story=reiver/teststory/beginning'}}    
        />
      </View>
  );
}


const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    height: 400
  }
});