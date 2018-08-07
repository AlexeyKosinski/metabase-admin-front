/**
 * Orders
 */

import React from 'react'
import {Helmet} from 'react-helmet'
import {Switch, Redirect} from 'react-router-dom';
import {createStructuredSelector} from 'reselect'
import PrivateRoute from 'components/PrivateRoute';
import trans from 'trans';
import List from './components/List'
import {
  ROUTE_TO_ORDERS,
  ROUTE_TO_ORDERS_LIST,
} from 'constants/routes';

const redirectTo = link => (<Redirect to={link} />);

export default class OrdersContainer extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>{trans('title.orders')}</title>
          <meta name="description" />
        </Helmet>
        <Switch>
          <PrivateRoute
            exact
            path={ROUTE_TO_ORDERS}
            render={redirectTo(ROUTE_TO_ORDERS_LIST)}
          />
          <PrivateRoute path={ROUTE_TO_ORDERS_LIST} component={List} />
        </Switch>
      </div>
    )
  }
}
