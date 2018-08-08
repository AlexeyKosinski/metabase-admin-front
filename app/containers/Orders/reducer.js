import typeToReducer from 'type-to-reducer';
import {fromJS} from 'immutable';
import reducerParse from 'utils/reducerParse';
import {
  GET_ORDERS_LIST,
  DEFAULT_LIST_PAGE,
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_TOTAL_ITEMS,
  DEFAULT_TOTAL_PAGES,
} from './constants';

const initialState = fromJS({
  list: {
    loading: false,
    items: [],
    totalItems: DEFAULT_TOTAL_ITEMS,
    totalPages: DEFAULT_TOTAL_PAGES,
    query: {
      page: DEFAULT_LIST_PAGE,
      count: DEFAULT_ITEMS_PER_PAGE,
    },
  },
  errors: {},
});

export default typeToReducer({
  [GET_ORDERS_LIST]: {
    START: (state = fromJS([]), action) => {
      return state.setIn(['list', 'query'], fromJS(action.meta)).setIn(['list', 'loading'], fromJS(true));
    },
    SUCCESS: (state = fromJS([]), d) => reducerParse(d,
      data => {
        const totalPages = Math.ceil(data.count / state.getIn(['list', 'query', 'count']));

        return state
          .setIn(['list', 'items'], fromJS(data.orders))
          .setIn(['list', 'totalItems'], fromJS(data.count))
          .setIn(['list', 'totalPages'], fromJS(totalPages))
          .setIn(['list', 'loading'], fromJS(false));
      },
      payload => {
        const {data, status} = payload;
        return state
          .set('errors', fromJS(data))
          .setIn(['list', 'loading'], fromJS(false));
      },
    ),
    FAIL: (state = fromJS([])) => state.setIn(['list', 'loading'], fromJS(false)),
  },
}, initialState);
