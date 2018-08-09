import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import colors from '../../../../../style/colors'
import {withStyles} from '@material-ui/core/styles/index'
import TableCell from '@material-ui/core/TableCell/index'
import _ from 'lodash';
import qs from 'qs';
import trans from 'trans';
import dateFormat from "dateformat"
import Link from 'components/Link';
import {
  ROUTE_TO_ORDERS_LIST,
} from 'constants/routes';

const CustomTableCell = withStyles(theme => ({
  head: {
    color: colors.fontDark,
    fontWeight: 'normal',
    borderBottom: 'none',
    borderTop: '1px solid',
    borderRight: '1px solid',
    padding: '0 24px',
    height: '44px',
    textAlign: 'left',
    fontSize: '1em',
    borderColor: colors.tableBorder,
    '&:nth-last-child': {
      borderRight: 'none',
    },
  },
  body: {
    color: colors.fontTable,
    fontWeight: '100',
    fontSize: '1em',
    textAlign: 'left',
    padding: '0 24px',
    borderBottom: 'none',
    borderRight: '1px solid',
    borderColor: colors.tableBorder,
    '&:nth-last-child': {
      borderRight: 'none',
    },
  },
}))(TableCell);

class ListItem extends React.Component {
  render() {
    const { classes, item } = this.props;
    const orderFilters = {
      filters: {
        user: [item._id],
      },
    };
    const routeToOrders = `${ROUTE_TO_ORDERS_LIST}?${qs.stringify(orderFilters)}`;

    return (
      <TableRow className={classes.row} key={item._id}>
        <CustomTableCell className={classes.nameRow}>{_.get(item, '_id')}</CustomTableCell>
        <CustomTableCell className={classes.nameRow}>
          {_.get(item, 'user.owner.applicant.firstName')} {_.get(item, 'user.owner.applicant.last')}
          </CustomTableCell>
        <CustomTableCell>
          <Link to={routeToOrders}>{trans('orders')}</Link>
        </CustomTableCell>
        <CustomTableCell>{dateFormat(new Date(item.createdAt), 'yyyy-mm-dd HH:MM')}</CustomTableCell>
      </TableRow>
    );
  }
}

export default ListItem;