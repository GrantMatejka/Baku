import * as React from 'react';
import {View} from 'react-native';

import FeedList from '../../components/feedList';
import Header from '../../components/header';

export default function Feed({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Header headerTitle="Feed" />

      <FeedList navigation={navigation}/>
    </View>
  );
}
