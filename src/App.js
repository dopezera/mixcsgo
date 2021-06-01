import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { CssBaseline, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';


import Header from './components/Header';
import UserForm from './screens/UserForm';

import SigninScreen from './screens/SigninScreen';
import CheckinScreen from './screens/CheckinScreen';
import UserScreen from './screens/UserScreen';
import MatchesScreen from './screens/MatchesScreen';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';

import SigninScreen2 from './screens/SigninScreen2';

const theme = createMuiTheme({
palette: {
  primary: {
    main: "#333996",
    light: '#3c44b126'
  },
  secundary: {
    main: "f83245",
    light: '#f8324526'
  },
  background: {
    default: "#f4f5fd"
  }
},
shape: {
  borderRadius: '12px'
},
overrides: {
  MuiAppBar: {
    root: {
      transform: 'translateZ(0)'
    }
  }
},
props: {
  MuiIconButton: {
    disableRipple: false
  }
}
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '',
    paddingRight: '',
    width: '100%',
  }
})

function App(props) {
  const classes = useStyles();

  const userSignin = useSelector( (state) => state.userSignin );
  const { userInfo } = userSignin;

  const { ...rest } = props;

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        <main>
        <Header></Header>
        <Route path="/login" component={SigninScreen2} exact></Route>
        <Route path="/login2" component={SigninScreen2} exact></Route>
        <ProtectedRoute path="/checkin" isAuth={userInfo} component={CheckinScreen} exact></ProtectedRoute>
        <ProtectedRoute path="/users" isAuth={userInfo} component={UserScreen} exact></ProtectedRoute>
        <ProtectedRoute path="/matches" isAuth={userInfo} component={MatchesScreen} exact></ProtectedRoute>
      </main>
      </div>
      <CssBaseline />
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;