import React from 'react';

import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';
import { ExitToApp, Filter9 } from '@material-ui/icons';
import GamesIcon from '@material-ui/icons/Games';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PersonIcon from '@material-ui/icons/Person';

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
                        <Badge color="primary">
                                <GamesIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton size="small">
                        {userInfo ? (
                                    <Badge badgeContent={userInfo.lvl} color="primary">
                                    <Link to="/users"><PersonIcon fontSize="small"></PersonIcon></Link>
                                </Badge>
                            ) : (
                                <div></div>
                            )}
                            
                        </IconButton>
                        <IconButton>
                            <Badge color="primary">
                            <Link to="/matches"><ReceiptIcon fontSize="small" /></Link>
                            </Badge>
                        </IconButton>
                        <IconButton onClick={signoutHandler}>
                            {userInfo ? (
                                    <Badge color="primary">
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