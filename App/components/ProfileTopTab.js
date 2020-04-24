import * as React from 'react';
import {createMaterialTopTabNavigator}
  from '@react-navigation/material-top-tabs';

import ProfilePosts from './profilePosts';
import Favorites from './favorites';
import Colors from '../styles/colors';

const TopTab = createMaterialTopTabNavigator();

export default function ProfileViews() {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        labelStyle: {fontWeight: 'bold', fontSize: 12},
        indicatorStyle: {backgroundColor: Colors.background},
        style: {
          backgroundColor: Colors.info
        },
        inactiveBackgroundColor: Colors.info,
        activeBackgroundColor: Colors.warning,
        inactiveTintColor: Colors.background,
        activeTintColor: 'white'
      }}
    >
      <TopTab.Screen name="Post Cards" component={ProfilePosts} />
      <TopTab.Screen name="Favs" component={Favorites} />
    </TopTab.Navigator>
  );
}
