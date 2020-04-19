import React from "react";
import FeedTab from "../screens/tabs/FeedTab";
import ProfileTab from "../screens/tabs/ProfileTab";
import { DrawerActions } from "@react-navigation/native";
import NotificationsTab from "../screens/tabs/NotificationsTab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchTab from "../screens/tabs/SearchTab";
import CreatePostTab from "../screens/tabs/CreatePostTab";
import Icon from "react-native-vector-icons/FontAwesome";
import Drawer from "./DrawerNav";
import HideWithKeyboard from "react-native-hide-with-keyboard";

const Tab = createBottomTabNavigator();

export default Navigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "#478a91"
        },

        inactiveBackgroundColor: "#478a91",
        activeBackgroundColor: "#478a91",
        inactiveTintColor: "#f0efef",
        activeTintColor: "#ffbc26"
        // showLabel: "false"
      }}
    >
      <Tab.Screen
        name="FeedTab"
        component={FeedTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="list" size={25} color={color} />
          ),
          title: "Feed"
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" size={25} color={color} />
          ),
          title: "Search"
        }}
      />
      <Tab.Screen
        name="CreatePostTab"
        component={CreatePostTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="plus-circle" size={25} color={color} />
          ),
          title: "New Post"
        }}
      />
      <Tab.Screen
        name="NotificationsTab"
        component={NotificationsTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="clock-o" size={25} color={color} />
          ),
          title: "Notifications"
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        children={Drawer}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user-circle-o" size={25} color={color} />
          ),
          title: "Profile"
        }}
      />
    </Tab.Navigator>
  );
};
