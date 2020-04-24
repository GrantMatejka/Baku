import React from 'react';
import profileTab from '../screens/tabs/profileTab';
import {createDrawerNavigator} from '@react-navigation/drawer';
import settingsDrawer from '../screens/tabs/drawers/settingsDrawer';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen
        name="Profile"
        options={{gestureEnabled: false}}
        component={profileTab}
      />
      <Drawer.Screen name="Settings" component={settingsDrawer} />
    </Drawer.Navigator>
  );
};

export default Navigator;
