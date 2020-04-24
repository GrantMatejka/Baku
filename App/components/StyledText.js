import * as React from 'react';
import {Text} from 'react-native';

// Is this necessary?

export function MonoText(props) {
  return <Text {...props} style={[props.style, {fontFamily: 'space-mono'}]} />;
}
