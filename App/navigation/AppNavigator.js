import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CreateProfileScreen from '../screens/CreateProfileScreen';
import Tabs from '../components/Tabs';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ResetPassword from '../screens/ResetPassword';
import EditProfile from '../screens/EditProfile';
import TabBarIcon from '../components/TabBarIcon';

const Stack = createStackNavigator();

const Navigator = ({loggedIn}) => {
  if (loggedIn) {
    return (
      <NavigationContainer
        screenOptions={{gestureEnabled: false}}
        initialRouteName="Welcome"
      >

        <Stack.Navigator screenOptions={{gestureEnabled: false}}>
          <Stack.Screen
            name="Tabs"
            children={Tabs}
            options={{
              title: 'Tabs',
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <TabBarIcon focused={focused} name="md-book" />
              )
            }}
          />

          <Stack.Screen
            name="Welcome"
            component={Login}
            options={{
              title: 'Welcome to Baku',
              headerShown: false
            }}
          />

          <Stack.Screen
            name="Create"
            component={Signup}
            options={{
              title: 'Create Profile Screen'
            }}
          />
        </Stack.Navigator>

      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer initialRouteName="Welcome">
        <Stack.Navigator
          screenOptions={{gestureEnabled: false}}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Welcome to Baku',
              headerShown: false
            }}
          />

          <Stack.Screen
            name="Create"
            component={Signup}
            options={{
              title: 'Create Account'
            }}
          />

          <Stack.Screen
            name="Additional Info"
            component={CreateProfileScreen}
            options={{
              title: 'Create Profile'

            }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              title: 'Edit Profile'

            }}
          />
          <Stack.Screen
            name="Tabs"
            children={Tabs}
            options={{
              title: 'Tabs',
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <TabBarIcon focused={focused} name="md-book" />
              )
            }}
          />
          <Stack.Screen
            name="Reset"
            component={ResetPassword}
            options={{
              title: 'Reset Password Screen'
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

export default Navigator;
