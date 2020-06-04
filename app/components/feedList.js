<<<<<<< HEAD
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
=======
import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef

import PostCard from './postCard';
// We need to replace this
import datas from '../assets/data/data';

export default class PhotoList extends Component {
  state = {
<<<<<<< HEAD
    datas: datas
=======
    datas: datas,
    refreshing: false
>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef
  };

  getPhotos() {
    return this.state.datas.map((data) => {
      return <PostCard
        detail={data}
        key={data.id}
<<<<<<< HEAD
        navigation={this.props.navigation}/>;
    });
  }

  render() {
    return <ScrollView contentContainerStyle={{
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    }}>
=======
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
>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef
      {this.getPhotos()}
    </ScrollView>;
  }
}
