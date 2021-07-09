import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import firebase from 'firebase/app';
import 'firebase/auth';

import { Routes } from 'routes';
import { client } from 'api';
import { theme, env } from 'config';
import { FirebaseAuthProvider } from 'hooks';

// we check if firebase is not initialized yet
if (!firebase.apps.length) {
  firebase.initializeApp(env.FIREBASE_CONFIG);
}

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAuthProvider firebase={firebase}>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <Routes />
        </ChakraProvider>
      </ApolloProvider>
    </FirebaseAuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
