import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import NotificationsTab from '../screens/tabs/notificationsTab';
import FeedTab from '../screens/tabs/feedTab';
import SearchTab from '../screens/tabs/searchTab';
import CreatePostTab from '../screens/tabs/createPostTab';
import Drawer from './drawerNav';
import Colors from '../styles/colors';
import ProfileTab from '../screens/tabs/profileTab';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: Colors.primary
        },

        inactiveBackgroundColor: Colors.primary,
        activeBackgroundColor: Colors.primary,
        inactiveTintColor: Colors.background,
        activeTintColor: Colors.warning
      }}
    >
      <Tab.Screen
        name="FeedTab"
        component={FeedTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="list" size={25} color={color} />
          ),
          title: 'Feed'
        }}
      />

      <Tab.Screen
        name="SearchTab"
        component={SearchTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" size={25} color={color} />
          ),
          title: 'Search'
        }}
      />
      <Tab.Screen
        name="CreateTab"
        component={CreatePostTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="plus-circle" size={25} color={color} />
          ),
          title: 'New Post'
        }}
      />
      <Tab.Screen
        name="NotificationsTab"
        component={NotificationsTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="clock-o" size={25} color={color} />
          ),
          title: 'Notifications'
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        children={Drawer}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user-circle-o" size={25} color={color} />
          ),
          title: 'Profile'
        }}
      />

    </Tab.Navigator>
  );
};

export default Navigator;
