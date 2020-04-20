import React, { Component } from "react";
import { Image, Text, View, TouchableWithoutFeedback } from "react-native";
import styles from "../styles/styles";
import AwesomeButton from "react-native-really-awesome-button";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";

export default class NotificationCard extends Component {
    type = {
        likeIcon: "heart-o",
        followIcon: "user-plus",
        likeText: "has liked your post",
        followText: "has followed you"
      };
    render() {
        return (
            <View style={styles.NotificationCardContainer}>
                <Image style={styles.NotificationUserProfile} source={{uri: this.props.detail.user_avatar}}></Image>
                <Text style={styles.NotificationCardTimeStamp}>make: this.props.detail.timestamp</Text>
                <Text style={styles.NotificationCardMainText}>{this.props.detail.username} {this.type.followText}</Text>
                <AwesomeIcon style={styles.NotificationTypeIcon}
                    name={this.type.followIcon}
                    size={35}
                ></AwesomeIcon>
            </View>
        );
    }
}
