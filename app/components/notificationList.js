import React, {Component} from 'react';
import {ScrollView, RefreshControl} from 'react-native';

import NotificationCard from './notificationCard';
import datas from '../assets/data/data';

export default class NotificationList extends Component {
  state = {
    datas: datas,
    refreshing: false
  };

  wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }

  getData = () => {
    console.log('refresh');
    this.wait(40000);
    this.setState({refreshing: false});
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.getData();
  }

  listNotifs() {
    return this.state.datas.map((data) => {
      return <NotificationCard detail={data} key={data.id} />;
    });
  }

  render() {
    return <ScrollView refreshControl={
      <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />} contentContainerStyle={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    }}>
      {this.listNotifs()}
    </ScrollView>;
  }
}
