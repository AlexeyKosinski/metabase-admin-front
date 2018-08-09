import { push } from 'react-router-redux';
import setUser from './setUser';
import setToken from './setToken';
import {
  ROUTE_TO_ORDERS_LIST,
} from 'constants/routes';

export default (data, dispatch) => {
  if (data && data.status === 200 && data.data && data.data.token) {
    setUser(data.data.user)
    setToken(data.data.token)
    location.href = '/hospitals'
  }

  if (dispatch) {
    dispatch(push(ROUTE_TO_ORDERS_LIST));
  }
}