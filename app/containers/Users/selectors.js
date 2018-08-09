import { createSelector } from 'reselect';

const selectUsersDomain = (state) => state.get('users');

export const makeUsers = () => createSelector(
  selectUsersDomain,
  (substate) => substate.getIn(['list', 'items']),
);

export const selectUsersListQuery = () => createSelector(
  selectUsersDomain,
  (substate) => substate.getIn(['list', 'query']),
);

export const selectUsersListTotalItems = () => createSelector(
  selectUsersDomain,
  (substate) => substate.getIn(['list', 'totalItems']),
);

export const selectUsersListLoading = () => createSelector(
  selectUsersDomain,
  (substate) => substate.getIn(['list', 'loading']),
);
