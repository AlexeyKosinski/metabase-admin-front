import React, {PureComponent} from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import immutableProps from "hocs/immutableProps";
import injectReducer from "utils/injectReducer";
import { getOrdersListAction } from "./actions";
import reducer from "./reducer";
import {makeOrders} from "./selectors";
import ListComponent from './components/List';

class OrdersList extends PureComponent {
  componentDidMount() {
    this.requestList();
  }

  requestList = (newQuery = {}) => {
    const {
      query,
      onGetOrdersList,
    } = this.props;

    onGetOrdersList({
      ...query,
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
  orders: makeOrders(),
});

const mapDispatchToProps = (dispatch) => ({
  onGetOrdersList: payload => dispatch(getOrdersListAction(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'order', reducer});

export default compose(
  withReducer,
  withConnect,
  immutableProps,
)(OrdersList)