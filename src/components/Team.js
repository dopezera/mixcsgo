import React from 'react';

export default function Team(props) {
    const equipe = props.equipe;
    return (
        <>
            <h1>{equipe.teamName} (LVL: {equipe.teamScore/5})</h1>
            {equipe.teamPlayers.map( (player) => {
                return <li>{player.username} ({player.userlvl})</li>
            })}
        </>
    )
}