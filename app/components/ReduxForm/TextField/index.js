import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Input, InputLabel } from '@material-ui/core'
import { FormControl, FormHelperText } from '@material-ui/core'
import { Field } from 'redux-form/immutable'
import FormHelperTextSpace from '../FormHelperTextSpace'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: '8px 0',
  },

    cssUnderline: {
        '&:after': {
            boxShadow: 'none !important',
            borderBottomColor: 'transparent !important',
            top: 0,
            bottom: 'auto',
        },
        '&:before': {
            borderBottomColor: 'transparent !important',
            top: 0,
            bottom: 'auto',
        },
        '&:hover': {
            boxShadow: 'none !important',
            borderBottomColor: 'transparent !important',
        },
    },
    bootstrapFormLabel: {
        position: 'relative',
        top: '9px',
        fontSize: 15,
        zIndex: 99,
        fontFamily: "Open Sans",
        marginLeft: '1em',
        color: '#aaaaaa',
    },
    focused: {
        color: '#FFFADF !important',
    },
    shrink : {
        transform: 'translate(0, 10px) scale(0.75)',
        color: '#aaaaaa',
    },
    bootstrapRoot: {
        padding: 0,
        'label + &': {
            marginTop: 0,
            height: 50,
        },
    },
    bootstrapInput: {
        borderRadius: 4,
        background: 'transparent',
        border: '1px solid #ced4da',
        fontSize: 15,
        height: '50px',
        padding: '0 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: '#D3D3D3',
            background: '#FFFADF',
        },
    },

})

const ComposedTextField = ({input, classes, meta: {touched, error}, label, ...props}) => {
  return (
      <FormControl className={classes.formControl} error aria-describedby={`${input.name}-field`}>
        <InputLabel htmlFor={`id-${input.name}`} error={!!touched && !!error}
                    FormLabelClasses={{
                        root: classes.bootstrapFormLabel,
                        focused: classes.focused,
                    }}
                    classes={{
                        shrink: classes.shrink,
                    }}
        >{label}</InputLabel>
        <Input id={`id-${input.name}`} error={!!error && !!touched} classes={{
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
            underline: classes.cssUnderline,
        }}{...input} {...props}/>
        {/*{touched && error ? (*/}
          {/*<FormHelperText error={!!touched && !!error} id={`${input.name}-field`}>{error}</FormHelperText>*/}
        {/*):(*/}
          {/*<FormHelperTextSpace />*/}
        {/*)}*/}
      </FormControl>

  )
}
const FormField = (props) => {
  return (
    <Field component={ComposedTextField} {...props}/>
  )
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FormField)