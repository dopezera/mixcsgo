import React from 'react';
import Badge from './Badge/Badge';
import CustomLinearProgress from './CustomLinearProgress/CustomLinearProgress';

export default function Team(props) {
    const equipe = props.equipe;
    return (
        <>
            <h1>{equipe.teamName} <Badge color="primary">{equipe.teamScore/5}</Badge></h1>
            {equipe.teamPlayers.map( (player) => {
                return <li>{player.username} <Badge color="primary">{player.userlvl}</Badge></li>
            })}
        </>
    )
}