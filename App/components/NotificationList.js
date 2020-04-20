import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import NotificationCard from "./NotificationCard";
import datas from "../assets/data/data";

export default class NotificationList extends Component {
  state = {
    datas: datas
  };

  listNotifs = () => {
    return this.state.datas.map(data => {
      return <NotificationCard detail={data} key={data.id} />;
    });
  };
  render() {
    return <ScrollView>{this.listNotifs()}</ScrollView>;
  }
}
