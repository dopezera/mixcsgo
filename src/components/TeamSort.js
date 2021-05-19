import React from 'react';
import Team from './Team';

export default function TeamSort(props) {
    const nPlayers = props.users.length;
    const nTeams = Math.trunc(nPlayers/5);
    const nResto = nPlayers%5;
    let sobraram = new Array();
    let willPlay = props.users.slice();

    var equipes = [{
        teamId: 0,
        teamName: '',
        teamScore: 0,
        teamPlayers: []
    }];

    for (i=0; i < (nTeams-1); i++) { //definindo primeiro de cada time
        equipes.push({
            "teamId": (i+1),
            teamName: '',
            teamScore: 0,
            teamPlayers: []
        })
    }

    var i;

    for (i=0; i < nResto; i++) {
        sobraram.push(willPlay.pop());
    }

    willPlay.sort((a, b) => (a.userlvl > b.userlvl) ? -1 : 1);

    var k;

    for (k=0; k < 5; k++) {
        for (i=0; i < nTeams; i++) { //definindo primeiro de cada time
            equipes[i].teamName = 'Time: '.concat(willPlay[0].username); //pega do ultimo pq executa sempre
            equipes[i].teamScore = equipes[i].teamScore + willPlay[0].userlvl;
            equipes[i].teamPlayers.push(willPlay.shift());
        }
    
        equipes.sort((a, b) => (a.teamScore > b.teamScore) ? 1 : -1);
    }
    
    return (
        <>
            {equipes.map((equipe) => {
                return <Team key={equipe.teamId} equipe={equipe}></Team>
            })}
            <h2>Sobraram {sobraram.length} jogadores.</h2>
            {sobraram.map((player) => {
                return <li>{player.username} ({player.userlvl})</li>
            })}
        </>
    );
}