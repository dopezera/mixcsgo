import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {signin} from '../actions/userActions';

export default function SteamSignin(props) {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/users';

    const handleLogin = () => {
      const popupWindow = window.open(
        "http://localhost:5000" + "/api/auth/steam",
        "_blank",
        "width=800, height=600",
      );
      if (window.focus) popupWindow.focus();
    };

  useEffect(() => {

        window.addEventListener("message", event => {
            if (event.origin !== process.env.REACT_APP_API_URL) return;
      
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
    <div className="App">
      <h1>Steam JWT Login</h1>
      <img
        onClick={handleLogin}
        src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png"
        alt="Login with Steam"
      />
      ...
    </div>
  );
};
