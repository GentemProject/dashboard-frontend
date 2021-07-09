import React from 'react';
import { Button } from '@chakra-ui/react';
import { useFirebaseAuth } from 'hooks';
import { useHistory } from 'react-router-dom';
import { useLoadingStore, useUserStore } from 'stores';
import { sleep } from 'utils';

export function Home() {
  const history = useHistory();
  const userStore = useUserStore();
  const loadingStore = useLoadingStore();
  const firebase = useFirebaseAuth();

  const handleLogout = async () => {
    loadingStore.setIsLoading(true);
    await firebase.signOut();
    await sleep(500);
    history.push('/auth/login');
    await sleep(1000);
    localStorage.removeItem('auth_token');
    userStore.setUser(null);
    loadingStore.setIsLoading(false);
  };

  return (
    <>
      Hola {userStore.user?.name} <Button onClick={handleLogout}>Log out</Button>
    </>
  );
}
