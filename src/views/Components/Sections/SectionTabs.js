import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import {checkin} from '../../../actions/userActions';

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import CustomTabs from "components/CustomTabs/CustomTabs";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(styles);

export default function SectionTabs(props) {

  const { checkedIn } = props;

  const dispatch = useDispatch();

  const userSignin = useSelector( (state) => state.userSignin );
  const userInfo = userSignin;

  let verificador = false;

  checkedIn.map((checkedUser) => {
    if(checkedUser.id != userInfo.id)
    {
      console.log('diferente');
    } else {
      verificador = true;
    }
  })


  const handleCheckIn = () => {
    console.log("UserId: %d, Username: %s, LVL: %d", userInfo.id, userInfo.username, Math.trunc(userInfo.lvl*10))
    console.log('checkin realizado com sucesso');
    dispatch(checkin(userInfo.id, userInfo.username, Math.trunc(userInfo.lvl*10)));
  };

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Navigation Tabs</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Tabs with Icons on Card</small>
              </h3>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Check In",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        {userInfo ? (
                                    verificador ? (
                                      <div>Oi, {userInfo.username}. Você já fez checkin.</div>
                                    ) : (<Button variant="contained" type="submit" color="primary" onClick={handleCheckIn}>CheckIn</Button>)
                            ) : (
                              <div>Você precisa fazer login antes de fazer checkin</div>
                            )}
                      </p>
                    )
                  },
                  {
                    tabName: "Ver lista",
                    tabIcon: Chat,
                    tabContent: (
                      <p className={classes.textCenter}>
                        {checkedIn.map((checkedUser) => {
                          return <li>ID: {checkedUser.id}</li>
                        })}
                      </p>
                    )
                  },
                  {
                    tabName: "Ver times",
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Tabs on Plain Card</small>
              </h3>
              <CustomTabs
                plainTabs
                headerColor="danger"
                tabs={[
                  {
                    tabName: "Home",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  },
                  {
                    tabName: "Updates",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    )
                  },
                  {
                    tabName: "History",
                    tabContent: (
                      <p className={classes.textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
