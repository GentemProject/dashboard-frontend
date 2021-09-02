import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from 'components';
import {
  Login,
  Register,
  Home,
  UsersPage,
  CausesPage,
  OrganizationsPage,
  CreateOrganizationsPage,
  NotFound,
  OrganizationPage,
} from 'modules';
import { useUserStore } from 'stores';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

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
          <PrivateRoute path="/users" component={<UsersPage />} />
          <PrivateRoute path="/causes" component={<CausesPage />} />
          <PrivateRoute path="/organizations/new" component={<CreateOrganizationsPage />} />
          <PrivateRoute path="/organizations/:slug" component={<OrganizationPage />} />
          <PrivateRoute path="/organizations" component={<OrganizationsPage />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
