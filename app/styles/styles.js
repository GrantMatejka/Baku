import {StyleSheet} from 'react-native';

import normalize from 'react-native-normalize';

import Colors from './colors';

const Styles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  // Container for any horizontally centered child content
  // Useful for with ScrollView
  container_content: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  // Card styles WIP
  card: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  card_complex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353535',
    fontSize: normalize(3),
    color: '#fff',
    flex: 1,
    borderRadius: 4,
    overflow: 'hidden'
  },

  // Generic header style
  header: {
    fontStyle: 'normal',
    padding: 30,
    color: Colors.dark,
    lineHeight: 30,
    textAlign: 'center'
  },
  header_postcard: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    paddingTop: 10
  },

  // Text Stylings
  text_large: {
    fontSize: 35
  },
  text_medium: {
    fontSize: 25
  },
  text_small: {
    fontSize: 15
  },
  text_xsmall: {
    fontSize: 10
  },
  text_error: {
    color: 'red',
    marginVertical: 10,
    fontSize: 15
  },
  text_button: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  text_centered: {
    textAlign: 'center'
  },

  // Button Stylings
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: Colors.warning,
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 5
  },

  // Padding Levels
  p_1: {
    padding: 5
  },
  p_2: {
    padding: 10
  },
  p_3: {
    padding: 15
  },
  p_4: {
    padding: 20
  },
  p_5: {
    padding: 25
  },

  // Padding Top Levels
  pt_1: {
    paddingTop: 5
  },
  pt_2: {
    paddingTop: 10
  },
  pt_3: {
    paddingTop: 15
  },
  pt_4: {
    paddingTop: 20
  },
  pt_5: {
    paddingTop: 25
  },

  // Margin Levels
  m_1: {
    margin: 5
  },
  m_2: {
    margin: 10
  },
  m_3: {
    margin: 15
  },
  m_4: {
    margin: 20
  },
  m_5: {
    margin: 25
  },

  // Margin Top Levels
  mt_1: {
    marginTop: 5
  },
  mt_2: {
    marginTop: 10
  },
  mt_3: {
    marginTop: 15
  },
  mt_4: {
    marginTop: 20
  },
  mt_5: {
    marginTop: 25
  },

  // Margin Bottom Levels
  mb_1: {
    marginBottom: 5
  },
  mb_2: {
    marginBottom: 10
  },
  mb_3: {
    marginBottom: 15
  },
  mb_4: {
    marginBottom: 20
  },
  mb_5: {
    marginBottom: 25
  },

  // Image stylings
  image_header: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },


  // TODO continue transitioning these out

  NotificationCardContainer: {
    flexDirection: 'row',
    backgroundColor: '#a0c9cf',
    height: 60,
    marginHorizontal: 15,
    marginVertical: 0,
    borderColor: 'rgba(0,0,0,0.05)',
    borderWidth: 2,
    borderRadius: 5
  },
  NotificationCardTimeStamp: {
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 13,
    textAlign: 'left',
    paddingTop: 33,
    marginLeft: 20
  },
  NotificationCardMainText: {
    flex: 4,
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'left',
    paddingTop: 12,
    marginLeft: -195,
    marginRight: -15
  },
  NotificationUserProfile: {
    flex: .75,
    alignItems: 'center',
    height: 55,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'black'
    // this needs work
  },
  NotificationTypeIcon: {
    flex: .8,
    color: 'black',
    marginTop: 10,
    marginRight: 0
    // this needs work
  },
  postCardLocation: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#DD8627'
  },
  postCardUserContainer: {
    alignSelf: 'flex-end',
    marginRight: 15,
    marginTop: -40
  },
  postCardContainer: {
    backgroundColor: '#FFF9F1',
    height: 450,
    marginHorizontal: 15,
    marginVertical: 30,
    borderColor: 'rgba(0,0,0,0.05)',
    borderWidth: 2
  },
  testDBContainer: {
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});

export default Styles;
