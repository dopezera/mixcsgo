import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { listMatches } from '../actions/matchActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import PageHeader from '../components/PageHeader';
import Match from '../components/Match';

export default function MatchesScreen() {

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
            width: '100%',
            backgroundColor: '#fff',
        },
        });
    
    const classes = useStyles();
    
    const dispatch = useDispatch();
    const matchesList = useSelector((state) => state.matchList); //definindo reducer
    const { loading, error, matches } = matchesList; 
    
    React.useEffect(() => {
        dispatch(listMatches()); 
    }, []);

    return (
        <>
        <PageHeader 
        title="Partidas encerradas" 
        subtitle="Essas são as partidas mais recentes que você jogou." 
        />
        {loading ? (
        <LoadingBox></LoadingBox>
    ) : error? (
        <MessageBox>{error}</MessageBox>
    ) : (
    <Grid container>
        {matches.map( (match) => {
            return <Match key={match.id} match={match}></Match>
        })}
    </Grid>
    )}
        </>
    );
}