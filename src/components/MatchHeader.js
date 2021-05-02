import { Card, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    matchHeader: {
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(3)
    },
    matchIcon: {
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    matchTitle: {
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity:'o.6'
        }  
        }
}))

export default function MatchHeader(props) {
    
    const classes = useStyles();

    const map_name = props.match.map_name;
    const t_score = props.match.t_score;
    const ct_score = props.match.ct_score;
    
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.matchHeader}>
                <div className={classes.matchTitle}>
                    <Typography 
                    variant="h3"
                    component="div">
                    {map_name}
                    </Typography>
                    <Typography 
                    variant="subtitle1"
                    component="div">
                    {t_score} x {ct_score}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}