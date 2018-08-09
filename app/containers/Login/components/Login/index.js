import React, { PureComponent } from 'react'
import { FormContainer, media } from 'style/containers'
import trans from 'trans'
import TextField from 'components/ReduxForm/TextField'
import ErrorText from 'components/ErrorText'
import ContainedButton from '../../../../components/ContainedButton'
import Actions from 'components/Actions'
import FullColumn from 'components/FullColumn'
import Link from 'components/Link'
import FlexCover from 'components/FlexCover'
import { withStyles } from '@material-ui/core/styles/index'
import styled from 'styled-components'
import colors from '../../../../style/colors'
import BgImg from 'components/Img/BG.png'

const FormTitle = styled.h2`
    color:${colors.fontDark};
    text-align: center;
    font-size:1.7em;
    font-weight:100;
    margin:.5em 0;
`
const FlexedContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  ${media.phone`
  `}
  ${media.tablet`
    justify-content: center;

  `}
  ${media.desktop`
  justify-content: center;
  `}
`
const ImgCover = styled.div`
  height:100%;
  flex: 0 .6 60%;
  background: url(${BgImg});
  background-size: cover;
  background-repeat: no-repeat;
  ${media.desktop`
    display: none;
  `}
`
const Error = styled.p`
  text-align: center;
  margin: .5em 0;
  color: ${colors.brandDanger};
`

class LoginStep extends PureComponent {
  render () {
    const {error, onLogin, submitting, valid, handleSubmit} = this.props
    return (
      <FlexedContainer>
        {/*<ImgCover/>*/}
        <FormContainer>
          <form onSubmit={handleSubmit(onLogin)}>
            <FormTitle>{trans('admin.panel.form.title')}</FormTitle>
            <FlexCover>
              <FullColumn>
                <TextField name="email" type="email" label={trans('admin.panel.form.login')} fullWidth/>
              </FullColumn>
              <FullColumn>
                <TextField name="password" type="password" label={trans('forms.registration.Password')} fullWidth/>
              </FullColumn>
              {error && (
                <ErrorText>{error}</ErrorText>
              )}
              <Actions>
                <ContainedButton type="submit" variant='contained'
                        disabled={!valid || submitting} color="primary">{trans('admin.panel.form.sign.me')}</ContainedButton>
              </Actions>
            </FlexCover>
          </form>
        </FormContainer>
      </FlexedContainer>
    )
  }
}

export default withStyles(() => {})(LoginStep)