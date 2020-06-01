import * as React from 'react';
import {ScrollView, Text, console} from 'react-native';

// import AwesomeButton from 'react-native-really-awesome-button';
// import {Fumi} from '../node_modules/react-native-textinput-effects/lib';
// import FontAwesomeIcon
//   from '../node_modules/react-native-vector-icons/FontAwesome';

import Firebase from '../config/firebase';
// import Styles from '../styles/styles';
// import Colors from '../styles/colors';
import ItineraryActivity from './itineraryActivity';

export default function ItineraryList({uid}) {
  const postId = uid;
  const [data, setData] = React.useState('');
  const [itinerary, setItinerary] = React.useState([]);

  const db = Firebase.firestore();

  React.useEffect(() => {
    db.collection('posts').doc(postId).get()
        .then((doc) => {
          setData(doc.data()), setItinerary(data.itinerary);
        })
        .catch((error) => {
          console.log('Error getting documents: ', error);
        });
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
    <ScrollView style={{flex: 1, alignSelf: 'flex-start'}}>
      {getActivities()}
    </ScrollView>
  );
}
