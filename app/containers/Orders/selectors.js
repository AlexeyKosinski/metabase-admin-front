import { createSelector } from 'reselect';

const selectOrdersDomain = (state) => state.get('orders');

export const makeOrders = () => createSelector(
  selectOrdersDomain,
  (substate) => substate.getIn(['list', 'items']),
);
