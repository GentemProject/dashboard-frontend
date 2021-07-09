import React from 'react';
import { Route } from 'react-router-dom';
import { NotFound } from 'modules';
import { useUserStore } from 'stores';

interface Props {
  path: string;
  component: JSX.Element;
}

export function PublicRoute({ path, component }: Props) {
  const { user } = useUserStore();

  return <Route exact path={path} render={() => (!user ? component : <NotFound />)} />;
}
