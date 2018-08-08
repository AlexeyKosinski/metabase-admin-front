import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import {MuiThemeProvider, createMuiTheme, withTheme} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components'
import colors from '../../style/colors'
import trans from '../../trans'
import IconHospital from '../Img/ico-Hospital.svg'
import IconImage from '../Img/ico-Image.svg'
import IconEdit from '../Img/ico-Edit.svg'
import IconUsers from '../Img/ico-User.svg'
import IconLogout from '../Img/ico-logout.svg'
import IconTransfer from '../Img/ico-Transfer.svg'
import Icon from '../Icons/icons.js'
import Avatar from '@material-ui/core/Avatar';
import Img from '../Img/BG.png'
import {
  URL_FROM_PAGE_USERS,
  URL_FROM_PAGE_ORDERS,
} from '../../constants'

const Count = styled.div`
    color:${colors.fontMenu};
    font-size: .7em;
    padding: 2px 6px;
    border-radius: 10px;
    margin: 0 1.5em;
    background: rgba(190, 190, 237, 0.2);
    &:active{
        color:${colors.white};
        background: rgba(225, 225, 225, 0.2);

    }
`
const IconMenu = styled.div`
    height: 20px;
    width: 20px;
    display: block;
    box-sizing: border-box;
  font-size: 20px; 
`

const Users = styled(IconMenu)`
    background: url(${IconUsers});
    background-size: contain;
`

const Transfer = styled(IconMenu)`
    background: url(${IconTransfer});
    background-size: contain;
`
const styles = {
  root: {
    display: 'flex',
    width: '280px !important',
    minWidth: '280px',
    height: '100%',
    background: colors.darkGrey,
  },
  navRoot: {
    width: '100%',
    color: colors.white,
    fontSize: 14,
    paddingTop: 0,
    position: 'relative',
  },
  labelPrimary: {
    fontFamily: 'Open Sans',
    fontSize: 20,
    color: colors.white,
  },
  labelSecondary: {
    fontFamily: 'Open Sans',
    fontSize: 13,
    fontWeight: '100',
    color: '#6d6d9b',
  },
  listItem: {
    color: colors.fontMenu,
    fontFamily: 'Open Sans',
    fontSize: 14,
    '&.active': {
      color: colors.white,
    },
  },
  button: {
    height: '50px',
    width: 'auto',
    padding: 14,
    margin: '0 16px',
    borderRadius: '4px',
    '&:hover': {
      background: 'rgba(190, 190, 237, 0.1)',
    },
    '&.active': {
      background: colors.activeMenu,
    },
  },
  activeMenu: {
    background: "#2C3BAF",
    color: "#fff"
  },
  rootDicoms: {
    padding: '0 16px',
  },
  heading: {
    width: '100%',
  },
  expandRoot: {
    width: '100%',
    background: colors.darkGrey,
    boxShadow: 'none',
    maxHeight: 50,
    minHeight: 'auto',

  },
  column: {
    padding: '0 24px',
  },
  rootSummary: {
    padding: '0 14px',
    borderRadius: '4px',
    height: 50,
    '&:hover': {
      backgroundColor: 'rgba(190, 190, 237, 0.1)',
    },
    '&.active': {
      backgroundColor: colors.activeMenu,
    },
    expanded: {
      margin: 0,
      maxHeight: 50,
      minHeight: 'auto',
    },
  },
  expanded: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 !important',
    height: 50,
    minHeight: 'auto !important',

  },
  iconButton: {
    height: 20,
    width: 20,
    fill: colors.fontMenu,
  },
  expandDetails: {
    padding: '0',
    minHeight: 'auto',
  },
  subMenuItem: {
    color: 'rgba(190, 190, 237, 0.6)',
    fontSize: 14,
    fontFamily: 'Open Sans',
    '&.active': {
      color: colors.white,
    },
  },
  subMenuRoot: {
    width: '100%',
    paddingBottom: '1.5em',
  },
  subMenuButton: {
    paddingLeft: '55px',
    height: '42px',
    '&.active': {
      color: colors.white,
    },
    '&:hover': {
      color: colors.white,
    },
  },
  flexedContainer: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '25px 12px',
    background: '#23234d',
  },
  avatar: {
    width: 50,
    height: 50,
    margin: '0 16px',
    marginBottom: '16px',
  },
  itemContainer: {
    margin: '0 1em',
  },
  itemIcon: {
    marginRight: 8,
    color: colors.fontMenu,
    '&.active': {
      color: colors.white,
    },
  },
  dividerRoot: {
    marginBottom: '1em',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  dividerTransparent: {
    height: 2,
    background: colors.darkGrey,
  },
  image: {
    height: 50,
    width: 50,
    /*background: `url(${Img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',*/
  },
  dividerBottom: {
    background: 'rgba(190, 190, 237, 0.1)',
    marginLeft: 55,
    marginRight: 25,
  },
  buttonLogout: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    height: '62px',
    padding: 14,
    borderTop: '1px solid rgba(0, 0, 0, 0.35)',
    background: '#151531',
    '&:hover': {
      background: 'rgba(190, 190, 237, 0.1)',
    },
    '&.active': {
      background: 'rgba(190, 190, 237, 0.1)',
    },
  },
  itemIconDicoms: {
    color: colors.fontMenu,
    '&.active': {
      color: colors.white,
    },
  },
  itemIconLogout: {
    marginRight: 8,
    color: 'rgba(168, 168, 205, 0.6)',
    '&.active': {
      color: '#a8a8cd',
    },
  },
  listLogout: {
    color: 'rgba(190, 190, 237, 0.6)',
    fontFamily: 'Open Sans',
    fontSize: 14,
    '&.active': {
      color: '#bebeed',
    },
  }
};

class SideBar extends PureComponent {

  constructor(props) {
    super(props);
    const {history} = this.props;
    this.state = {
      nowLocation: history.location.pathname
    }

  }

  handlerMenuClick = (selectedPage) => () => {
    const {history} = this.props;
    this.setState({nowLocation: selectedPage})
    history.push(selectedPage);
  }

  render() {
    const {classes} = this.props;
    const {nowLocation} = this.state;
    return (
      <div className={classes.root}>
        <List component="nav" className={classes.navRoot}>
          <ListItem classes={{root: classes.flexedContainer}}>
            <Avatar
              alt="Admin Img"
              className={classes.avatar}
            >
              <div className={classes.image}/>
            </Avatar>
            <ListItemText
              classes={{
                primary: classes.labelPrimary,
                secondary: classes.labelSecondary
              }}
              primary={trans('admin.panel.title')}
              secondary="Admin"
            />
          </ListItem>
          <Divider classes={{root: classes.dividerRoot}}/>
          <ListItem
            button
            onClick={this.handlerMenuClick(URL_FROM_PAGE_ORDERS)}
            classes={{
              button: classes.button,
              container: classes.itemContainer
            }}
            className={nowLocation === URL_FROM_PAGE_ORDERS ? classes.activeMenu : ''}
          >
            <ListItemIcon className={classes.itemIcon}>
              <IconMenu className="icon-ico-User"/>
            </ListItemIcon>
            <ListItemText
              primary={trans('admin.panel.orders')}
              classes={{primary: classes.listItem}}
            />
            {/*<ListItemSecondaryAction>*/}
            {/*<Count>33</Count>*/}
            {/*</ListItemSecondaryAction>*/}
          </ListItem>
          <Divider classes={{root: classes.dividerTransparent}}/>
          <ListItem
            button
            onClick={this.handlerMenuClick(URL_FROM_PAGE_USERS)}
            classes={{
              button: classes.button,
              container: classes.itemContainer
            }}
            className={nowLocation === URL_FROM_PAGE_USERS ? classes.activeMenu : ''}
          >
            <ListItemIcon className={classes.itemIcon}>
              <IconMenu className="icon-ico-User"/>
            </ListItemIcon>
            <ListItemText
              primary={trans('admin.panel.users')}
              classes={{primary: classes.listItem}}
            />
            {/*<ListItemSecondaryAction>*/}
            {/*<Count>33</Count>*/}
            {/*</ListItemSecondaryAction>*/}
          </ListItem>
          <Divider classes={{root: classes.dividerTransparent}}/>
          <ListItem
            button
            classes={{
              button: classes.buttonLogout,
              container: classes.itemContainer
            }}
          >
            <ListItemIcon className={classes.itemIconLogout}>
              <IconMenu className="icon-ico-logout"/>
            </ListItemIcon>
            <ListItemText primary={trans('admin.panel.logout')} classes={{primary: classes.listLogout}}/>
          </ListItem>
        </List>
      </div>
    )
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SideBar);