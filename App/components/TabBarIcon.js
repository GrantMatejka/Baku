import * as React from 'react';
import {Ionicons} from '@expo/vector-icons';

import Colors from '../styles/colors';

// G: I feel like we don't need a component for this

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{marginBottom: -3}}
      color={props.focused ? Colors.primary : Colors.light}
    />
  );
}
