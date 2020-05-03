import React, {Component} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import datas from '../assets/data/data';
import styles from '../styles/styles';
import PostCard from './postCard';

// We need to consolidate all 'postcards'

export default class ProfilePosts extends Component {
  state = {
    datas: datas
  };

  getPhotos() {
    return this.state.datas.map((data) => {
      return <PostCard detail={data} key={data.id} />;
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>{this.getPhotos()}</View>
      </ScrollView>
    );
  }
}
