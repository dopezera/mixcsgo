import React, { useEffect, useState } from 'react';
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

import { listCheckedIn } from '../../../actions/userActions'; 
import LoadingBox from "components/LoadingBox";
import MessageBox from "components/MessageBox";

import TeamSort from '../../../components/TeamSort';

let teams = [];

const useStyles = makeStyles(styles);

export default function SectionTabs(props) {
  const dispatch = useDispatch();
  
  const [checkinConfirmed, setCheckinConfirmed] = useState(false);
  const [teamsSorted, setTeamsSorted] = useState(false);

  const checkedInUsersList = useSelector((state) => state.checkedInList); //definindo reducer
  const { loading, error, users } = checkedInUsersList; 

  const userSignin = useSelector( (state) => state.userSignin );
  const { userInfo } = userSignin;

  let verificador = false;

  if (!loading) {
    users.map( (checkedUser) => {
      if(checkedUser.userId !== userInfo.id) //set verificador true if user in checkin page is already checkedin
      {
        //return verificador = false;
        //se eu nao achei o cara nos já checkados eu nao faço nada
      } else {
        verificador = true;
      }
    });

  }

  const handleCheckIn = (checkinConfirmed) => {
    dispatch(checkin(userInfo.id, userInfo.username, Math.trunc(userInfo.lvl*10)));
    setCheckinConfirmed(true);
  };

  const handleTeams = (teamsSorted) => {
    //teams = teamSort(users);
    setTeamsSorted(true);
  };

  useEffect(() => {
    dispatch(listCheckedIn()); 
}, [checkinConfirmed]);

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Checkin e separação de times</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Faça seu checkin e aguarde a tiradada de time</small>
              </h3>
              {loading ? (
                  <LoadingBox></LoadingBox>
              ) : error? (
                  <MessageBox>{error}</MessageBox>
              ) : (
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
                        {users.length} Jogadores
                        {users.map((checkedUser) => {
                          return <li key={checkedUser.userId}>{checkedUser.username} LVL: {checkedUser.userlvl}</li>
                        })}
                      </p>
                    )
                  },
                  {
                    tabName: "Ver times",
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>
                        {userInfo ? (
                                    teamsSorted ? (
                                      (<TeamSort users={users}></TeamSort>)
                                    ) : (<Button variant="contained" type="submit" color="primary" onClick={handleTeams}>Tirar times</Button>)
                            ) : (
                              <div>Faça login primeiro</div>
                            )}
                      </p>
                    )
                  }
                ]}
              />
              )}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
