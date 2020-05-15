import * as React from 'react';
import {View} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';

import firebase from '../../config/firebase';
import Styles from '../../styles/styles';
import Header from '../../components/header';
import NotificationList from '../../components/notificationList';

export default function NotificationsTab() {
  return (
    <View style={Styles.container}>
      <Header headerTitle="Notifications" />

      <ScrollView
        style={Styles.container}
      >
        <View>
          <NotificationList />
        </View>
      </ScrollView>
    </View>
  );
}
