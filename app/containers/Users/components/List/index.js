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
import { withStyles } from '@material-ui/core/styles/index'
import Pagination from 'react-js-pagination';
import Loading from 'components/Loading';
import colors from 'style/colors';
import ListItem from './components/ListItem'
import {
  PAGINATION_SIZE,
} from '../../constants';

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

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 0,
    overflowX: 'auto',
    boxShadow: 'none',
    fontSize: 14,
    color: colors.fontTable,
  },
  container:{
    width:'100%',
  },
  table: {
    minWidth: '100%',
  },
  row: {
    // color: colors.fontTable,
    textAlign: 'left',
    '&:nth-of-type(odd)': {
      backgroundColor: colors.tableGrey,
    },
  },
  nameRow:{
    width: '30%',
    fontWeight: '100',
  },
  flex:{
    flex: '1',
    textAlign: 'center',
    fontSize:18,
    fontWeight: 'normal',
  },
  bar:{
    backgroundColor: colors.white,
  },
  button: {
    margin: '0 .5em',
    background: 'transparent',
    boxShadow: 'none',
    height: '20px',
    width: '20px',
    '&:hover':{
      background: 'transparent',
    },
    '&:active': {
      boxShadow: 'none',
      background: 'transparent',
    },
    '&:focus': {
      boxShadow: 'none',
      background: 'transparent',
    },
  },
  actionCover:{
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    document:{
      boxShadow: 'none',
      borderRadius: '4px',
    },
  },
  actionCell:{
    width: '15%',
    textAlign: 'center',
  },
  formControl:{
    width: '100%',
    borderRadius: '4px',

  },
  icon:{
    display: 'none',
  },
  rootAction:{
    width: '100%',
    marginTop: 0,
    overflowX: 'auto',
    boxShadow: 'none',
    borderRadius: '4px',
  },
  selectMenu:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 0,
  },
});

class UsersList extends PureComponent {
  handlePageChange = (page) => {
    this.props.requestMethod({
      page,
    });
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
    const {
      classes,
      listQuery,
      totalItems,
      listLoading,
    } = this.props;

    return (
      <div className={classes.container}>
        <AppBar position="static" color="default" className={classes.bar}>
          <Toolbar>
            <Typography variant="title" className={classes.flex}>
              {trans('admin.panel.users')}
            </Typography>
          </Toolbar>
        </AppBar>
        {
          listLoading
            ? (<Loading />)
            : (
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <CustomTableCell>{trans('admin.panel.users.ID')}</CustomTableCell>
                      <CustomTableCell>{trans('admin.panel.users.user')}</CustomTableCell>
                      <CustomTableCell>{trans('options')}</CustomTableCell>
                      <CustomTableCell>{trans('admin.panel.users.craetedAt')}</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>{this.renderItems()}</TableBody>
                </Table>
                <Pagination
                  innerClass="arrows-pagination"
                  activePage={listQuery.page}
                  itemsCountPerPage={listQuery.count}
                  totalItemsCount={totalItems}
                  pageRangeDisplayed={PAGINATION_SIZE}
                  onChange={this.handlePageChange}
                />
              </Paper>
            )
        }
      </div>
    )
  }
}

export default withStyles(styles)(UsersList);
