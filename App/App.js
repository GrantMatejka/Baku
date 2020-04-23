/* eslint-disable require-jsdoc */
/* eslint-env node*/
import 'react-native-gesture-handler';
import React, {console} from 'react';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
// eslint-disable-next-line no-unused-vars
import AppNavigator from './navigation/AppNavigator';

import {decode, encode} from 'base-64';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

export default function App(props) {
  // Uncomment this when we figure out what to do about device based state
  // const [loggedIn] = React.useState(false);
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  // const [initialNavigationState] = React.useState();
  // const containerRef = React.useRef();

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return <AppNavigator loggedIn={false} />;
  }
}
