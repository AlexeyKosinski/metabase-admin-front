import {createAction} from 'redux-actions';
import {GET_ORDERS_LIST} from './constants';
import {getOrdersListApi} from './api';

export const getOrdersListAction = createAction(GET_ORDERS_LIST, async (d) => await getOrdersListApi(d));
