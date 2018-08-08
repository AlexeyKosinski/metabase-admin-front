import {createAction} from 'redux-actions';
import {GET_USERS_LIST} from './constants';
import {getUsersListApi} from './api';

export const getUsersListAction = createAction(GET_USERS_LIST, async d => await getUsersListApi(d), m => m);
