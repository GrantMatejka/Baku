import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateProfileScreen from "../screens/CreateProfileScreen";
import FeedTab from "../screens/tabs/FeedTab";
import WelcomeScreen from "../screens/WelcomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "../components/Tabs";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import ResetPass from "../screens/ResetPass";

const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator;
export default Navigator = ({ loggedIn }) => {
  if (loggedIn) {
    return (
      <NavigationContainer
        screenOptions={{ gestureEnabled: false }}
        initialRouteName="Welcome"
      >
        <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
          <Stack.Screen
            name="Tabs"
            children={Tabs}
            options={{
              title: "Tabs",
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name="md-book" />
              )
            }}
          />
          <Stack.Screen
            name="Welcome"
            component={Login}
            options={{
              title: "Welcome Screen",

              headerShown: false
              // tabBarIcon: ({ focused }) => (
              //   <TabBarIcon focused={focused} name="md-book" />
              // )
            }}
          />
          <Stack.Screen
            name="Create"
            component={Signup}
            options={{
              title: "Create Profile Screen"
              // headerShown: false
              // tabBarIcon: ({ focused }) => (
              //   <TabBarIcon focused={focused} name="md-book" />
              // )
            }}
          />
            <Stack.Screen
                name="Reset"
                component={ResetPass}
                options={{
                    title: "Reset Password Screen"
                    // headerShown: false
                    // tabBarIcon: ({ focused }) => (
                    //   <TabBarIcon focused={focused} name="md-book" />
                    // )
                }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer initialRouteName="Welcome">
        <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
          <Stack.Screen
            name="Welcome"
            component={Login}
            options={{
              title: "Welcome Screen",

              headerShown: false
              // tabBarIcon: ({ focused }) => (
              //   <TabBarIcon focused={focused} name="md-book" />
              // )
            }}
          />
          <Stack.Screen
            name="Create"
            component={Signup}
            options={{
              title: "Create Profile Screen"
              // headerShown: false
              // tabBarIcon: ({ focused }) => (
              //   <TabBarIcon focused={focused} name="md-book" />
              // )
            }}
          />
          <Stack.Screen
            name="Tabs"
            children={Tabs}
            options={{
              title: "Tabs",
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name="md-book" />
              )
            }}
          />
            <Stack.Screen
                name="Reset"
                component={ResetPass}
                options={{
                    title: "Reset Password Screen"
                    // headerShown: false
                    // tabBarIcon: ({ focused }) => (
                    //   <TabBarIcon focused={focused} name="md-book" />
                    // )
                }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
