import React, {Component} from 'react';
import {ScrollView} from 'react-native';

import FeedCard from './feedCard';
// We need to replace this
import datas from '../assets/data/data';

export default class PhotoList extends Component {
  state = {
    datas: datas
  };

  getPhotos() {
    return this.state.datas.map((data) => {
      return <FeedCard detail={data} key={data.id} />;
    });
  }

  render() {
    return <ScrollView>{this.getPhotos()}</ScrollView>;
  }
}
