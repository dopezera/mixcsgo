import { makeStyles } from '@material-ui/core';
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


    
    return (
        <div>Match Footer</div>
    )
}