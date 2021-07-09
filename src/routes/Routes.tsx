import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Loading } from 'components';
import { NotFound, Login, Register, Home } from 'modules';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useUserStore } from 'stores';
// import { sleep } from 'utils';

export function Routes() {
  const { user } = useUserStore();

  return (
    <BrowserRouter>
      <Loading />
      <Switch>
        <Route exact path="/" render={() => (user ? <Home /> : <Login />)} />
        <PublicRoute path="/auth/login" component={<Login />} />
        <PublicRoute path="/auth/register" component={<Register />} />
        <PrivateRoute path="/home" component={<Home />} />
        <Route render={() => <NotFound />} />
      </Switch>
    </BrowserRouter>
  );
}
