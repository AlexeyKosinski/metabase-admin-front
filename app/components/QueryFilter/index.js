import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import qs from 'qs';

export default class QueryFilters extends PureComponent {
  componentWillReceiveProps(nextProps) {
    const {
      location: {
        search,
      },
    } = this.props;
    const {
      location: {
        search: newSearch,
      },
    } = nextProps;

    const prevQueryString = search.substr(1);
    const prevQueryParams = qs.parse(prevQueryString);
    const newQueryString = newSearch.substr(1);
    const newQueryParams = qs.parse(newQueryString);

    if (!_.isEqual(prevQueryParams, newQueryParams)) {
      this.requestMethod(newQueryParams);
    }
  }

  changeQuery = (newQueries) => {
    const {
      location: {
        search,
        pathname,
      },
      goTo,
    } = this.props;
    let queries;

    if (search) {
      const queryParamsString = search.substr(1);
      const queryParams = qs.parse(queryParamsString);

      queries = {
        ...queryParams,
        ...newQueries,
      };
    } else {
      queries = {
        ...newQueries,
      };
    }

    const result = qs.stringify(queries);
    goTo(`${pathname}?${result}`);
  }

  changeFilters = (newFilters) => {
    const {
      location: {
        search,
        pathname,
      },
      filters,
      goTo,
    } = this.props;
    let queries = {};
    let updatedFilters = {
      ...filters,
    };

    if (search) {
      const queryParamsString = search.substr(1);
      queries = qs.parse(queryParamsString);
    }

    _.forEach(newFilters, (value, key) => {
      updatedFilters[key] = value;
    });

    queries.filters = updatedFilters;

    const result = qs.stringify(queries);
    goTo(`${pathname}?${result}`);
  }
}

const propTypes = {
  location: PropTypes.object,
  push: PropTypes.func,
};
const defaultProps = {};

QueryFilters.propTypes = propTypes;
QueryFilters.defaultProps = defaultProps;
