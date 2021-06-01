import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Footer from "../components/Footer/Footer.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button.js";
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardFooter from "../components/Card/CardFooter.js";

import styles from "../assets/jss/material-kit-react/views/loginPage.js";

import image from "../assets/img/bg7.jpg";


import {useDispatch, useSelector} from 'react-redux';
import {signin} from '../actions/userActions';
import LoadingBox from 'components/LoadingBox.js';
import MessageBox from 'components/MessageBox.js';
import { Icon, Paper } from '@material-ui/core';

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const classes = useStyles();
  const { ...rest } = props;

  const handleLogin = () => {
    const popupWindow = window.open(
      "http://refacttesting.herokuapp.com" + "/api/auth/steam",
      "_blank",
      "width=800, height=600",
    );
    if (window.focus) popupWindow.focus();
  };

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/users';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch();

    useEffect(() => {

      window.addEventListener("message", event => {
          if (event.origin !== process.env.REACT_APP_API_URL) {
            return;
          }

          const { id, username, steamid, lvl, token, ok } = event.data;
    
          if (ok) {
            dispatch(signin(steamid));
          }
      });

      if(userInfo) {
        props.history.push(redirect);
    }

}, [userInfo, props.history, redirect]);

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Clube Premium de CS GO"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Bem-vindo</h4>
                  </CardHeader>
                  <p className={classes.divider}>Faça login usando sua conta steam</p>
                  <CardBody>
                  
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  {loading && <LoadingBox></LoadingBox>}
                  {error && <MessageBox>{error}</MessageBox>}
                  <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleLogin}
      >
        Steam: Login
      </Button>
                  </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
