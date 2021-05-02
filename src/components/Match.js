import { Card, Container, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React from 'react';
import MatchHeader from './MatchHeader';
import MatchFooter from './MatchFooter';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

export default function Match(props) {
    const { match } = props;
    const classes = useStyles();

    const t_side = [];
    const ct_side = [];

    match.players_details.map((player) => {
        if (player.team == 2) {
            t_side.push(player);
        }
    })

    match.players_details.map((player) => {
        if (player.team == 3) {
            ct_side.push(player);
        }
    })

    return (

      <Grid item style={{ backgroundColor: '', height: 800, width: '100%', paddingLeft: '100px', paddingRight: '100px' }}>
      <MatchHeader match={match} />
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell >Kills</TableCell>
            <TableCell >Assists</TableCell>
            <TableCell >Deaths</TableCell>
            <TableCell >Mvps</TableCell>
            <TableCell >Score</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        <TableCell align='center'><b>( {match.t_score} )</b> TIME A</TableCell>
          {t_side.map((player) => (
            <TableRow key={player.id}>
              <TableCell component="th" scope="row">
                {player.username}
              </TableCell>
              <TableCell >{player.kills}</TableCell>
              <TableCell >{player.assists}</TableCell>
              <TableCell >{player.deaths}</TableCell>
              <TableCell >{player.mvps}</TableCell>
              <TableCell >{player.score}</TableCell>
            </TableRow>
          ))}
            <TableCell align='center'><b>( {match.ct_score} )</b> TIME B</TableCell>
          {ct_side.map((player) => (
            <TableRow key={player.id}>
              <TableCell component="th" scope="row">
                {player.username}
              </TableCell>
              <TableCell >{player.kills}</TableCell>
              <TableCell >{player.assists}</TableCell>
              <TableCell >{player.deaths}</TableCell>
              <TableCell >{player.mvps}</TableCell>
              <TableCell >{player.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <MatchFooter />
      </Grid>
    );
}

/*

<Grid key={match.id} item xs={10}>
            
            <h1>{match.id}: {match.map_name}</h1>
            <h2>CT {match.ct_score} X {match.t_score} TR</h2>
            <h2> </h2>
            <h2></h2>
        </Grid>


*/