import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import FeedCard from "./FeedCard";
import datas from "../assets/data/data";

export default class PhotoList extends Component {
  state = {
    datas: datas
  };

  getPhotos = () => {
    return this.state.datas.map(data => {
      return <FeedCard detail={data} key={data.id} />;
    });
  };
  render() {
    return <ScrollView>{this.getPhotos()}</ScrollView>;
  }
}
