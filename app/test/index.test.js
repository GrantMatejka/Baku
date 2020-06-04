const test = require('firebase-functions-test')({
   databaseURL: 'https://sauce-god.firebaseio.com',
   storageBucket: 'sauce-god.appspot.com',
   projectId: 'sauce-god',
 }, 'sauce-god-1067d7c0b9ef');
 const functions = require('firebase-functions');
 test.mockConfig({ stripe: { uid: '23wr42ewr34' }});
 const myFunctions = require('../app.js');
 const wrapped = test.wrap(myFunctions.makeUppercase);
 const data = wrapped(data, {
   auth: {
     uid: 'jckS2Q0'
   },
   authType: 'USER'
 });