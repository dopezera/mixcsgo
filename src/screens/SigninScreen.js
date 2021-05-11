import { Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PageHeader from '../components/PageHeader';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import {signin} from '../actions/userActions';

import Button from '@material-ui/core/Button';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        },
        '& .MuiButton-label': {
            margin: theme.spacing(1)
        },
        '& .alert-info': {
            backgroundColor: "#FF6961",
            margin: theme.spacing(1),
            color: "primary",
            width: '20%'
        }
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function UserSignin(props) {
    const classes = useStyle();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/users';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
          dispatch(signin(email, password));
      }; 

    useEffect( () => {
        if(userInfo) {
            props.history.push(redirect);
        }
    }, [userInfo, props.history, redirect]);

    return (
        <>
            <PageHeader 
            title="Login" 
            subtitle="Informe seu username e senha" 
            icon={<PeopleAltIcon fontSize="large"/>}
            />

            <Paper className={classes.pageContent}>
            <form className={classes.root} onSubmit={submitHandler}>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField 
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                        id="standard-password-input"
                        label="Senha"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <Grid>
                        {loading && <LoadingBox></LoadingBox>}
                        {error && <MessageBox>{error}</MessageBox>}
                        <Button variant="contained" type="submit" color="primary">Login</Button>
                        <div>
                            Você é novo aqui?{' '}
                            <Link to={`/register?redirect=${redirect}`}>
                            Crie a sua conta
                            </Link>
                        </div>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
            </Paper>
        </>
    )
}