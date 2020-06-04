<<<<<<< HEAD
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
=======
import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef

import NotificationCard from './notificationCard';
import datas from '../assets/data/data';

export default class NotificationList extends Component {
  state = {
<<<<<<< HEAD
    datas: datas
  };

=======
    datas: datas,
    refreshing: false
  };

  wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  getData = () => {
    console.log('refresh')
    this.wait(40000)
    this.setState({ refreshing: false });

  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.getData();
  }

>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef
  listNotifs() {
    return this.state.datas.map((data) => {
      return <NotificationCard detail={data} key={data.id} />;
    });
  }

  render() {
<<<<<<< HEAD
    return <ScrollView contentContainerStyle={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    }}>
=======
    return <ScrollView refreshControl={
      <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />} contentContainerStyle={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
      }}>
>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef
      {this.listNotifs()}
    </ScrollView>;
  }
}
