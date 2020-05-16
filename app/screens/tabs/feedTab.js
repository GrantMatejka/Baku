import * as React from 'react';
import {View} from 'react-native';

import FeedList from '../../components/feedList';
import Header from '../../components/header';

export default function Feed() {
  return (
    <View style={{flex: 1}}>
      <Header headerTitle="Feed" />

      <FeedList />
    </View>
  );
}
