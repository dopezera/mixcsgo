import React from 'react';

import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';
import { ExitToApp, Filter9 } from '@material-ui/icons';

import StarsIcon from '@material-ui/icons/Stars';
const useStyle = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff'
    },
    searchInput: {
        opacity:'0.6',
        padding:`0px ${theme.spacing(1)}`,
        fontSize:'0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}))

export default function Header() {

    const classes = useStyle();

    const userSignin = useSelector( (state) => state.userSignin );
    const { userInfo } = userSignin;

    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    }

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <IconButton>
                        <Badge badgeContent={1} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton size="small">
                            xablau
                            <Badge badgeContent={2}  color="primary">
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton onClick={signoutHandler}>
                            {userInfo ? (
                                    <Badge badgeContent={'logout'} color="primary">
                                    <ExitToApp fontSize="small" />
                                </Badge>
                            ) : (
                                <Link to="/login">Login</Link>
                            )}
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}