import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from 'components';
import { NotFound, Login, Register, Home } from 'modules';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useUserStore } from 'stores';

export function Routes() {
  const { user } = useUserStore();

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => (user ? <Home /> : <Login />)} />
          <PublicRoute path="/auth/login" component={<Login />} />
          <PublicRoute path="/auth/register" component={<Register />} />
          <PrivateRoute path="/home" component={<Home />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
