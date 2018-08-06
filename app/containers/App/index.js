/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import Login from 'containers/Login/Loadable'
import Users from 'containers/Users/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import FlexedContainer from 'components/FlexedContainer'
import SideBar from "components/SideBar";
import isGuest from 'utils/isGuest'

import Header from 'components/Header'
import Footer from 'components/Footer'
import trans from '../../trans'
import { createMuiTheme } from '@material-ui/core/styles';
import '../../app.global.css';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#5DA3F1',
            main: '#468AD6',
            dark: '#3F96F8',
            contrastText: '#fff',
        },
        // secondary: {
        //     light: palette.secondary.A200,
        //     main: palette.secondary.A400,
        //     dark: palette.secondary.A700,
        //     contrastText: getContrastText(palette.secondary.A400),
        // },
        error: {
            main: '#E5082C',
            contrastText: '#fff',
        },
    },
});

export default function App (props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate={trans('app.title')}
        defaultTitle={trans('app.description')}
      >
        <meta name="description" content={trans('app.description')}/>
      </Helmet>
        <FlexedContainer>
            {!isGuest() && (
              <SideBar history={props.history} />
            )}
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/login" component={Login}/>
            <Route path="/users" component={Users}/>
            <Route path="" component={NotFoundPage}/>
          </Switch>
          <Footer/>
        </FlexedContainer>
    </AppWrapper>
  )
}
