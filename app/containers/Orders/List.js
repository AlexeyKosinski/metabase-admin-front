import React from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import { push } from 'react-router-redux';
import {createStructuredSelector} from "reselect";
import qs from 'qs';
import immutableProps from "hocs/immutableProps";
import injectReducer from "utils/injectReducer";
import QueryFilter from 'components/QueryFilter';
import { getOrdersListAction } from "./actions";
import reducer from "./reducer";
import {
  makeOrders,
  selectOrdersListQuery,
  selectOrderListFilters,
  selectOrdersListTotalItems,
  selectOrdersListLoading,
} from "./selectors";
import ListComponent from './components/List';

class OrdersList extends QueryFilter {
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
      orderQuery,
      onGetOrdersList,
    } = this.props;

    onGetOrdersList({
      ...orderQuery,
      ...newQuery,
    });
  };

  render() {
    return (
      <ListComponent
        {...this.props}
        requestMethod={this.changeQuery}
        changeFilters={this.changeFilters}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  items: makeOrders(),
  orderQuery: selectOrdersListQuery(),
  filters: selectOrderListFilters(),
  totalItems: selectOrdersListTotalItems(),
  listLoading: selectOrdersListLoading(),
});

const mapDispatchToProps = (dispatch) => ({
  onGetOrdersList: payload => dispatch(getOrdersListAction(payload)),
  goTo: (payload) => dispatch(push(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'orders', reducer});

export default compose(
  withReducer,
  withConnect,
  immutableProps,
)(OrdersList)