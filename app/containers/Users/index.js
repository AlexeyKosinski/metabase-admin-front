/**
 * Users
 */

import React from 'react';
import {Helmet} from 'react-helmet';
import {Switch, Route, Redirect} from 'react-router-dom';
import trans from 'trans';
import ListContainer from './List';
import {
  ROUTE_TO_USERS,
  ROUTE_TO_USERS_LIST,
} from 'constants/routes';

export default class UsersContainer extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>{trans('title.users')}</title>
          <meta name="description" />
        </Helmet>
        <Switch>
          <Route
            exact
            path={ROUTE_TO_USERS}
            render={() => (<Redirect to={ROUTE_TO_USERS_LIST} />)}
          />
          <Route path={ROUTE_TO_USERS_LIST} component={ListContainer} />
        </Switch>
      </div>
    )
  }
}
