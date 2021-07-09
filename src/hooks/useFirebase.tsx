import React, { createContext, ReactNode, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import firebaseNs from 'firebase/app';
import { client } from 'api';
import { useLoadingStore, useUserStore } from 'stores';
import { GET_ME } from 'modules/Users';

interface FirebaseContext {
  firebase: typeof firebaseNs;
}
const FirebaseContext = createContext<FirebaseContext | null>(null);

interface FirebaseProvider {
  firebase: typeof firebaseNs;
  children: ReactNode;
}

export function FirebaseAuthProvider({ firebase, children }: FirebaseProvider) {
  const history = useHistory();
  const userStore = useUserStore();
  const loadingStore = useLoadingStore();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async hasUser => {
      if (hasUser) {
        const auth_token = await hasUser.getIdToken();
        localStorage.setItem('auth_token', auth_token);

        const response = await client.query({ query: GET_ME });
        const user = response.data.user;

        userStore.setUser(user);
      } else {
        userStore.setUser(null);
        localStorage.removeItem('auth_token');
      }
      loadingStore.setIsLoading(false);
      unsubscribe();
    });
    // eslint-disable-next-line
  }, [firebase, history]);

  return <FirebaseContext.Provider value={{ firebase }}>{children}</FirebaseContext.Provider>;
}

export function useFirebaseAuth() {
  const firebaseContext = useContext(FirebaseContext);

  if (firebaseContext === null) {
    throw new Error('No FirebaseAuthProvider found.');
  }

  const firebaseAuth = firebaseContext.firebase.auth();
  return firebaseAuth;
}
