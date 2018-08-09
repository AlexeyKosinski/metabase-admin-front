/**
 * Orders
 */

import React from 'react';
import {Helmet} from 'react-helmet';
import {Switch, Route, Redirect} from 'react-router-dom';
import trans from 'trans';
import ListContainer from './List';
import {
  ROUTE_TO_ORDERS,
  ROUTE_TO_ORDERS_LIST,
} from 'constants/routes';

export default class OrdersContainer extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>{trans('title.orders')}</title>
          <meta name="description" />
        </Helmet>
        <Switch>
          <Route
            exact
            path={ROUTE_TO_ORDERS}
            render={() => (<Redirect to={ROUTE_TO_ORDERS_LIST} />)}
          />
          <Route path={ROUTE_TO_ORDERS_LIST} component={ListContainer} />
        </Switch>
      </div>
    )
  }
}
