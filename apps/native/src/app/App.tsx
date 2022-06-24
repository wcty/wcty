/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
  Platform,
  NativeModules,
  TouchableOpacity,
  Text
} from 'react-native';
import { WebView } from 'react-native-webview';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

i18n.locale = Localization.locale;
i18n.fallbacks = true;

const LOCATION_TASK_NAME = 'background-location-task';

const requestPermissions = async () => {
  const { status } = await Location.requestPermissionsAsync();
  if (status === 'granted') {
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.Balanced,
    });
  }
};

const PermissionsButton = () => (
  <TouchableOpacity onPress={requestPermissions}>
    <Text>Enable background location</Text>
  </TouchableOpacity>
);

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    // Error occurred - check `error.message` for more details.
    return;
  }
  if (data) {
    const { locations } = data;
    // do something with the locations captured in the background
  }
});

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{backgroundColor: '#F4EADE', width:'100%', height:'100%'}}>
        <WebView 
          sharedCookiesEnabled={false} 
          source={{ 
            uri: 'https://weee.city/', 
            headers:{ 
              webview: 'true', 
              'Accept-Language': Localization.locale||'en', 
              Cookie: `NEXT_LOCALE=${Localization.locale||'en'}` 
            } }} 
          style={{ marginTop:26 }} 
          userAgent={Platform.OS === 'android' ? 'Chrome/18.0.1025.133 Mobile Safari/535.19 [WV;]' : 'AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 [WV;]'}/>
      </View>
    </>
  );
};

