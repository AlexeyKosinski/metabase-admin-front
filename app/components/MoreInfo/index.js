import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import trans from 'trans'
import { compose } from 'redux'
import Button from '@material-ui/core/Button';
import Close from '../Img/ico-Close.svg'
import colors from '../../style/colors'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
    modalBack: {
        backgroundColor: 'rgba(223, 223, 238, 0.9)',
        backdropFilter: 'blur(2.3px)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        zIndex: '10',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        textAlign: 'center',
        fontWeight: '300',
        fontSize: '2em',
        marginTop: '0.5em',
    },
    contentCover: {
        maxWidth: '100%',
        display: 'flex',
        flexFlow: 'column',
        textAlign: 'center',
    },
    button: {
        width: '118px',
        height: '54px',
        margin: '1em auto',
        textTransform: 'none',
        color: colors.white,
        fontSize: '1em',
        background: colors.buttonBlue,
        '&:hover':{
            background: colors.activeMenu,
        },
        '&:active':{
            background: colors.activeMenu,
        },
    },
    topBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '2em',
        width: '100%',
    },
    bottomBar: {
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '1em',
        width: '100%',
    },
    topCenter: {
        textAlign: 'center',
        flex: 1,
    },
    iconButton:{
        width: '40px',
        height: '40px',
        background: 'rgba(255, 255, 255, 0.7)',
        boxShadow: '0 0 10px 0 rgba(21, 21, 49, 0.16)',
        '&:hover':{
            background: 'rgba(255, 255, 255, 0.9)',
        },
        '&:active':{
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 0 10px 0 rgba(21, 21, 49, 0.25)',
        },
    },
    close: {
        width: '8px',
        height: '8px',
        backgroundImage: `url(${Close})`,
        backgroundPosition: 'center',

    },
    flexedRow: {
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
        flex: 1,
    },
    flexedColumn: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    flexedRowRight: {
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flex: 1,
    },
    pDicoms:{
      color: 'rgba(35, 35, 77, 0.6)',
      fontSize: 14,
        textAlign: 'center',
    },

    linkButton: {
        background: 'transparent',
        textTransform: 'none',
        color: '#6d6d9b',
        fontSize: 14,
        boxShadow: 'none',
        '&:hover':{
            background: 'transparent',
            boxShadow: 'none',
            color: colors.activeMenu,
        },
        '&:active':{
            background: 'transparent',
            boxShadow: 'none',
            color: colors.activeMenu,
        },
        cover:{
            margin: '2em',
            padding: 15,
        },
    },
    dicomName:{
       color:'rgba(35, 35, 77, 0.6)',
        fontSize: 14,
        fontWeight: 100,
    },
    TableRow:{
        height: 30
    }
}

class MoreInfo extends React.Component {
    render () {
        const {classes, onClose, dicom} = this.props;
        if( !dicom ) {
            return null;
        }
        const more = _.toArray(dicom.more);

        console.log(more);
        return (
            <div
                onClose={onClose}
                className={classes.modalBack}
            >
                <div className={classes.topBar}>
                    <Button  variant="fab" className={classes.iconButton} onClick={onClose}>
                        <div className={classes.close}/>
                    </Button>
                </div>
                <div className={classes.contentCover}>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableBody>
                                {more && more.map(n =>
                                    ( n &&
                                        <TableRow key={n.info}  className={classes.TableRow}>
                                            <TableCell>{n.info}</TableCell>
                                            <TableCell>{(n.value) ? (n.value) : "-"}</TableCell>
                                        </TableRow>
                                    )
                                )}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
                <div className={classes.bottomBar}>
                    <Button  variant="contained" className={classes.linkButton} onClick={onClose}>
                        {trans('admin.panel.DICOMs.assign.dialog.cancel')}
                    </Button>
                </div>

            </div>
        )
    }
}

MoreInfo.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default (withStyles(styles))(MoreInfo)