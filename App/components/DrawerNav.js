import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import ProfileTab from '../screens/tabs/profileTab';
import SettingsDrawer from '../screens/tabs/drawers/settingsDrawer';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen
        name="Profile"
        options={{gestureEnabled: false}}
        component={ProfileTab}
      />

      <Drawer.Screen name="Settings" component={SettingsDrawer} />

    </Drawer.Navigator>
  );
};

export default Navigator;
