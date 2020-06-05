import * as React from 'react';
import { Text, console } from 'react-native';

import Firebase from '../config/firebase';
import ItineraryActivity from './itineraryActivity';
import { ScrollView } from 'react-native-gesture-handler';

export default function ItineraryList({ uid }) {
  const postId = uid;
  const [itinerary, setItinerary] = React.useState([]);

  const db = Firebase.firestore();

  React.useEffect(() => {
    if (itinerary === []) {
      db.collection('posts').doc(postId).get()
        .then((doc) => {
          setItinerary(doc.data().itinerary);
        })
        .catch((error) => {
          console.log('Error getting documents: ', error);
        });
    }
  });

  const getActivities = () => {
    if (itinerary !== undefined) {
      return Object.keys(itinerary).map(
        // eslint-disable-next-line react/jsx-key
        (key) => <ItineraryActivity time={key} activity={itinerary[key]} />);
    } else {
      return <Text>Loading...</Text>;
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignSelf: 'flex-start' }}>
      {getActivities()}
    </ScrollView>
  );
}
