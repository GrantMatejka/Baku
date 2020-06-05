import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import PostCard from './postCard';
// We need to replace this
import datas from '../assets/data/data';

export default class PhotoList extends Component {
  state = {
    datas: datas,
    refreshing: false
  };

  getPhotos() {
    return this.state.datas.map((data) => {
      return <PostCard
        detail={data}
        key={data.id}
        navigation={this.props.navigation} />;
    });
  }

  wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  getData = () => {
    console.log('refresh')
    this.wait(2000)
    this.setState({ refreshing: false });

  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.getData();
  }

  render() {
    return <ScrollView refreshControl={
      <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />} contentContainerStyle={{
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-around',
        flexWrap: 'wrap'
      }}>
      {this.getPhotos()}
    </ScrollView>;
  }
}
