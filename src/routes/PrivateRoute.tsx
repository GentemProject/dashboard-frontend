import React from 'react';
import { Route } from 'react-router-dom';
import { useUserStore } from 'stores';
import { NotFound } from 'modules';

interface Props {
  path: string;
  component: JSX.Element;
}

export function PrivateRoute({ path, component }: Props) {
  const { user } = useUserStore();

  return <Route exact path={path} render={() => (user ? component : <NotFound />)} />;
}
