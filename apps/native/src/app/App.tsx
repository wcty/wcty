/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import {
  View,
  StatusBar,
  Platform,
  NativeModules
} from 'react-native';
import { WebView } from 'react-native-webview';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import Constants from 'expo-constants';

i18n.locale = Localization.locale;
i18n.fallbacks = true;

const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules?.I18nManager?.localeIdentifier || 'en';


export default function App() {


  return (
    <View style={{backgroundColor: '#F4EADE', width:'100%', height:'100%'}}>
      <WebView 
        sharedCookiesEnabled={true} 
        source={{ 
          uri: Constants?.manifest?.extra?.dev?
            'http://172.20.10.4:3000':
            'https://weee.city', 
          headers:{ 
            'Accept-Language': deviceLanguage||'en', 
            Cookie: `NEXT_LOCALE=${deviceLanguage||'en'};` 
          } }} 
        userAgent={
          Platform.OS === 'android' ? 
          'Chrome/18.0.1025.133 Mobile Safari/535.19 [WV;]' : 
          'AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 [WV;]'
        }
        />
    </View>
  );
};

