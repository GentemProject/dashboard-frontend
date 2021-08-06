import dotenv from 'dotenv';

dotenv.config();

export const env = {
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  FIREBASE_CONFIG: {
    apiKey: 'AIzaSyAvoo8S3JssiO5yh_f-WCZmzVh3JRgYiys',
    authDomain: 'gentem-app.firebaseapp.com',
    databaseURL: 'https://gentem-app.firebaseio.com',
    projectId: 'gentem-app',
    storageBucket: 'gentem-app.appspot.com',
    messagingSenderId: '307026614634',
    appId: '1:307026614634:web:b502cf5db0d81db6caed13',
  },
};
