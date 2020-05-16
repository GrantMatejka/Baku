import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import PostCard from './postCard';
// We need to replace this
import datas from '../assets/data/data';

export default class PhotoList extends Component {
  state = {
    datas: datas
  };

  getPhotos() {
    return this.state.datas.map((data) => {
      return <PostCard detail={data} key={data.id} />;
    });
  }

  render() {
    return <ScrollView contentContainerStyle={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    }}>
      {this.getPhotos()}
    </ScrollView>;
  }
}
