import React, {PureComponent} from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import immutableProps from "hocs/immutableProps";
import injectReducer from "utils/injectReducer";
import { getOrdersListAction } from "./actions";
import reducer from "./reducer";
import {
  makeOrders,
  selectOrdersListQuery,
  selectOrdersListTotalItems,
  selectOrdersListLoading,
} from "./selectors";
import ListComponent from './components/List';

class OrdersList extends PureComponent {
  componentDidMount() {
    this.requestList();
  }

  requestList = (newQuery = {}) => {
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
        requestList={this.requestList}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  items: makeOrders(),
  orderQuery: selectOrdersListQuery(),
  totalItems: selectOrdersListTotalItems(),
  listLoading: selectOrdersListLoading(),
});

const mapDispatchToProps = (dispatch) => ({
  onGetOrdersList: payload => dispatch(getOrdersListAction(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'orders', reducer});

export default compose(
  withReducer,
  withConnect,
  immutableProps,
)(OrdersList)