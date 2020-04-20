import "react-native-gesture-handler";
import React from "react";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import AppNavigator from "./navigation/AppNavigator";

export default function App(props) {
  const [loggedIn] = React.useState(false);
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState] = React.useState();
  const containerRef = React.useRef();

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
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
