import React from 'react';
import ProfileTab from '../screens/tabs/ProfileTab';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Settings from '../screens/tabs/drawers/Settings';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen
        name="Profile"
        options={{gestureEnabled: false}}
        component={ProfileTab}
      />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default Navigator;
