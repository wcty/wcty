/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  View,
  StatusBar,
  Platform,
} from 'react-native';

import { WebView } from 'react-native-webview';

export default function App() {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{backgroundColor: '#F4EADE', width:'100%', height:'100%'}}>
        <WebView source={{ uri: 'https://weee.city/', headers:{ webview: 'true' } }} style={{marginTop:26}} 
        userAgent={Platform.OS === 'android' ? 'Chrome/18.0.1025.133 Mobile Safari/535.19 [WV;]' : 'AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 [WV;]'}/>
      </View>
    </>
  );
};

