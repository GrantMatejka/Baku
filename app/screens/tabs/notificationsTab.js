import * as React from 'react';
import {View} from 'react-native';

import Header from '../../components/header';
import NotificationList from '../../components/notificationList';

export default function NotificationsTab() {
  return (
    <View style={{flex: 1}}>
      <Header headerTitle="Notifications" />
      <NotificationList />
    </View>
  );
}
