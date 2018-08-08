/**
 *
 * Asynchronously loads the component for Users
 *
 */
import React from 'react';
import Loading from 'components/Loading';
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => <Loading/>,
});
