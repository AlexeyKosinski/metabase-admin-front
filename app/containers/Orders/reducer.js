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
    START: (state = fromJS([]), paylaod) => {
      debugger;
    },
    SUCCESS: (state = fromJS([]), d) => reducerParse(d, (data) => {
        return state.set('users', fromJS(data));
      },
      (payload) => {
        const {data, status} = payload;
        return state.set('errors', fromJS(data));
      },
    ),
    FAIL: (state = fromJS([]), d) => state
  },
}, initialState);
