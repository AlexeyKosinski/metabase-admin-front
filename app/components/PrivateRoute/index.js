import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from "redux";
import { Redirect, Route } from 'react-router-dom';
import immutableProps from 'hocs/immutableProps'
import getToken from 'utils/getToken';
import { ROUTE_TO_LOGIN } from 'constants/routes';

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      component,
      path,
      exact,
      accessAllowed,
    } = this.props;

    if (accessAllowed) {
      return (
        <Route
          exact={exact}
          path={path}
          component={component}
        />
      );
    }

    return (
      <Redirect to={ROUTE_TO_LOGIN} />
    );
  }
}

const mapStateToProps = (state) => ({
  accessAllowed: getToken(),
});

const mapDispatchToProps = {};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  immutableProps,
)(PrivateRoute)