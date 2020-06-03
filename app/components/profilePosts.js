import React, {Component} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import datas from '../assets/data/data';
import PostCard from './postCard';

// We need to consolidate all 'postcards'

export default class ProfilePosts extends Component {
  state = {
    datas: datas
  };

  getPhotos() {
    return this.state.datas.map((data) => {
      return <PostCard
        detail={data}
        key={data.id}
        navigation={this.props.navigation} />;
    });
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={
          {
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap'
          }
        } testID='profile-posts'>
        {this.getPhotos()}
      </ScrollView>
    );
  }
}
