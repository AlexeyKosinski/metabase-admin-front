import React from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import { push } from 'react-router-redux';
import {createStructuredSelector} from "reselect";
import qs from 'qs';
import immutableProps from "hocs/immutableProps";
import injectReducer from "utils/injectReducer";
import QueryFilter from 'components/QueryFilter';
import { getUsersListAction } from "./actions";
import reducer from "./reducer";
import {
  makeUsers,
  selectUsersListQuery,
  selectUsersListTotalItems,
  selectUsersListLoading,
} from "./selectors";
import ListComponent from './components/List';

class UsersList extends QueryFilter {
  componentDidMount() {
    const {
      location: {
        search,
      },
    } = this.props;
    let queryParams = {};

    if (search) {
      const queryString = search.substr(1);
      queryParams = qs.parse(queryString);
    }

    this.requestMethod(queryParams);
  }

  requestMethod = (newQuery = {}) => {
    const {
      listQuery,
      onGetUsersList,
    } = this.props;

    onGetUsersList({
      ...listQuery,
      ...newQuery,
    });
  };

  render() {
    return (
      <ListComponent
        {...this.props}
        requestMethod={this.changeQuery}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  items: makeUsers(),
  listQuery: selectUsersListQuery(),
  totalItems: selectUsersListTotalItems(),
  listLoading: selectUsersListLoading(),
});

const mapDispatchToProps = (dispatch) => ({
  onGetUsersList: payload => dispatch(getUsersListAction(payload)),
  goTo: (payload) => dispatch(push(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'users', reducer});

export default compose(
  withReducer,
  withConnect,
  immutableProps,
)(UsersList)