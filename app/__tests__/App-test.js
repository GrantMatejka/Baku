import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';
import React from 'react';
import App from '../App';
<<<<<<< HEAD
import CreatePostTab from '../screens/tabs/createPostTab';
import SearchTab from '../screens/tabs/searchTab';
import FeedTab from '../screens/tabs/feedTab'
import NotificationsTab from '../screens/tabs/notificationsTab';
import ProfileTab from '../screens/tabs/profileTab';
import Login from '../screens/loginScreen';
import Signup from '../screens/signupScreen';
import CreateProfile from '../screens/createProfileScreen';
import ChangePassword from '../screens/changePasswordScreen';
import ResetPassword  from '../screens/resetPasswordScreen';
import PreviewPost from '../screens/previewPostScreen';
import DetailedPost  from '../screens/detailedPostScreen';
import EditProfile from '../screens/editProfileScreen';
import SettingsDrawer from '../screens/tabs/drawers/settingsDrawer'
import firebase from '../config/firebase';
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
=======
>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef
jest.setTimeout(150);

jest.mock('expo', () => ({
  AppLoading: 'AppLoading',
}));

jest.mock('../navigation/appNavigator', () => 'AppNavigator');

describe('App', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });
<<<<<<< HEAD
=======

>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef
  it(`renders the loading screen`, () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders the root without loading screen`, () => {
    const tree = renderer.create(<App skipLoadingScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
<<<<<<< HEAD
  describe('Tabs', () => {
   beforeEach(() => {
      NavigationTestUtils.resetInternalState();
    });
   it(`renders the Search tab`, () => {
     const tree = renderer.create(<SearchTab />).toJSON();
     expect(tree).toMatchSnapshot();
   });
   /*it(`renders the Profile tab`, () => {
      const tree = renderer.create(<ProfileTab />).toJSON();
      expect(tree).toMatchSnapshot();
    });*/
    it(`renders the Notifications tab`, () => {
      const tree = renderer.create(<NotificationsTab />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it(`renders the Feed tab`, () => {
      const tree = renderer.create(<FeedTab />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it(`renders the Create Post tab`, () => {
      const tree = renderer.create(<CreatePostTab />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it(`renders the Settings Drawer`, () => {
      const tree = renderer.create(<SettingsDrawer />).toJSON();
      expect(tree).toMatchSnapshot();
    });
 });
 
 describe('Screens', () => {
   jest.mock('Firebase', () => {
      return {
        initializeApp: jest.fn(() => {
          return {
            auth: jest.fn(() => {
              return {
                createUserWithEmailAndPassword: jest.fn((para1, para2) => {
                  return new Promise(function(resolve, reject) {
                    resolve({
                      email: 'test@test.com',
                      uid: '12345678abcdefg'
                    });
    
                    reject({ message: 'error!' });
                  });
                }),
                signOut: jest.fn(() => {
                  return new Promise(function(resolve, reject) {
                    resolve('Success');
                    reject({ message: 'error!' });
                  });
                }),
                onAuthStateChanged: jest.fn(() => {
                  return {
                    email: 'test@test.com',
                    uid: '12345678abcdefg'
                  };
                }),
                signInWithEmailAndPassword: jest.fn((para1, para2) => {
                  return new Promise(function(resolve, reject) {
                    reject({ message: 'error!' });
                  });
                }),
              };
            })
          };
        })
      };
    });
   it(`renders the Sign Up screen`, () => {
     const tree = renderer.create(<Signup />).toJSON();
     expect(tree).toMatchSnapshot();
   });
 
   it(`renders the Log in screen`, () => {
     const tree = renderer.create(<Login />).toJSON();
     expect(tree).toMatchSnapshot();
   });
 
   it(`renders the Change Password screen`, () => {
     const tree = renderer.create(<ChangePassword />).toJSON();
     expect(tree).toMatchSnapshot();
   });
   
   //uid is null

   it(`renders the Create Profile screen`, () => {
      //this.uid = this.currentUser.uid;
     const tree = renderer.create(<CreateProfile />).toJSON();
     expect(tree).toMatchSnapshot();
   });
 
   it(`renders the Reset Password screen`, () => {
     const tree = renderer.create(<ResetPassword />).toJSON();
     expect(tree).toMatchSnapshot();
   }); 
 
   //params undefined
   it(`renders the Preview Post screen`, () => {
     const tree = renderer.create(<PreviewPost />).toJSON();
     expect(tree).toMatchSnapshot();
   }); 
   it(`renders the Detailed Post screen`, () => {
     const tree = renderer.create(<DetailedPost />).toJSON();
     expect(tree).toMatchSnapshot();
   }); 
 
 
 //uid is null
 it(`renders the Edit Profile screen`, () => {
   const tree = renderer.create(<EditProfile />).toJSON();
   expect(tree).toMatchSnapshot();
 }); 

 
 });
});
=======
});
>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef
