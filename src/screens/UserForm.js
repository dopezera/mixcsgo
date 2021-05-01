import { Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import { register } from '../actions/userActions';
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
        }
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function UserForm(props) {
    const classes = useStyle();

    const [username, setUserName] = useState('');
    const [steamid, setSteamId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/login';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister; 

    const dispatch = useDispatch();
    const submitHandler = (e) => { 
        e.preventDefault();
        if (password !== confirmPassword) {
          alert('Você inseriu senha e confirmação de senha diferentes');
        } else {
          dispatch(register(username, steamid, email, password));
        }
      };
      
      useEffect(() => {
          if(userInfo) {
              props.history.push(redirect);
          }
      }, [props.history, redirect, userInfo]);

    return (
        <>
            <PageHeader 
            title="Cadastro" 
            subtitle="Insira suas informações" 
            icon={<PeopleAltIcon fontSize="large"/>}
            />

        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}

            <Paper className={classes.pageContent}>
            <form className={classes.root} onSubmit={submitHandler}>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField 
                        variant="outlined" 
                        label="Username"
                        name="username"
                        onChange={(e) => setUserName(e.target.value)}
                        />
                        <TextField 
                        variant="outlined" 
                        label="SteamID"
                        name="steamid"
                        onChange={(e) => setSteamId(e.target.value)}
                        />
                        <TextField 
                        variant="outlined" 
                        label="Email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField 
                        id="standard-password-input"
                        label="Senha"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                        id="standard-password-input"
                        label="Confirme sua senha"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <Button variant="contained" type="submit" color="primary">Cadastrar</Button>
                        <div>
                            Já tem uma conta? <Link to="/signin">Login</Link>
                        </div>
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                </Grid>
            </form>
            </Paper>
        </>
    )
}