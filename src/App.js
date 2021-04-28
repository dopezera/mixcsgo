import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { CssBaseline, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';


import Header from './components/Header';
import UserForm from './screens/UserForm';

import SigninScreen from './screens/SigninScreen';
import UserScreen from './screens/UserScreen';
import MatchesScreen from './screens/MatchesScreen';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';



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
    paddingLeft: '100px',
    paddingRight: '100px',
    width: '100%',
  }
})

function App() {
  const classes = useStyles();

  const userSignin = useSelector( (state) => state.userSignin );
  const { userInfo } = userSignin;

  
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        <Header />
        <main>
        <Route path="/register" component={UserForm} exact></Route>
        <Route path="/login" component={SigninScreen} exact></Route>
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