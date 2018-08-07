import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import colors from '../../../../../style/colors'
import {withStyles} from '@material-ui/core/styles/index'
import TableCell from '@material-ui/core/TableCell/index'
import dateFormat from "dateformat"

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
    const {classes, item} = this.props;

    return (
      <TableRow className={classes.row} key={item._id}>
        <CustomTableCell numeric className={classes.nameRow}>{item._id}</CustomTableCell>
        <CustomTableCell component="th" scope="row" className={classes.nameRow}>
          {item.firstName} {item.lastName}
        </CustomTableCell>
        <CustomTableCell numeric>{dateFormat(new Date(item.createdAt), 'yyyy-mm-dd HH:MM')}</CustomTableCell>
        <CustomTableCell numeric>{item.dob}</CustomTableCell>
      </TableRow>
    );
  }
}

export default ListItem;