import React, {PureComponent} from 'react'
import trans from 'trans'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles/index'
import colors from '../../../../style/colors'
import ListItem from './components/ListItem'

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
    fontSize: '14',
    borderColor: colors.tableBorder,
    '&:nth-last-child': {
      borderRight: 'none',
    },
  },
  body: {
    color: colors.fontTable,
    fontWeight: '100',
    fontSize: 14,
    textAlign: 'left',
    borderBottom: 'none',
    borderRight: '1px solid',
    padding: '0 24px',
    borderColor: colors.tableBorder,
    '&:nth-last-child': {
      borderRight: 'none',
    },
  },
}))(TableCell);

export default class OrdersList extends PureComponent {
  componentDidMount() {
    const {onGetOrdersList}  = this.props;
    onGetOrdersList();
  }

  renderItems = () => {
    const {
      items,
    } = this.props;

    return items && items.map(item => (
      <ListItem
        key={item._id}
        {...this.props}
        item={item}
      />
    ));
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.container}>
        <AppBar position="static" color="default" className={classes.bar}>
          <Toolbar>
            <Typography variant="title" className={classes.flex}>
              {trans('admin.panel.orders')}
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell numeric>{trans('admin.panel.users.ID')}</CustomTableCell>
                <CustomTableCell>{trans('admin.panel.hospitals.name')}</CustomTableCell>
                <CustomTableCell numeric>{trans('admin.panel.users.registration.date')}</CustomTableCell>
                <CustomTableCell numeric>{trans('admin.panel.users.birth.date')}</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.renderItems()}</TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}
