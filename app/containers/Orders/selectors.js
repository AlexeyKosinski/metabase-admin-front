import { createSelector } from 'reselect';

const selectOrdersDomain = (state) => state.get('orders');

export const makeOrders = () => createSelector(
  selectOrdersDomain,
  (substate) => substate.getIn(['list', 'items']),
);

export const selectOrdersListQuery = () => createSelector(
  selectOrdersDomain,
  (substate) => substate.getIn(['list', 'query']),
);

export const selectOrdersListTotalItems = () => createSelector(
  selectOrdersDomain,
  (substate) => substate.getIn(['list', 'totalItems']),
);

export const selectOrdersListLoading = () => createSelector(
  selectOrdersDomain,
  (substate) => substate.getIn(['list', 'loading']),
);
