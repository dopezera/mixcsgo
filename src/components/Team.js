import Badge from './Badge/Badge'
import CustomLinearProgress from './CustomLinearProgress/CustomLinearProgress'
import React from 'react'
import {v4 as uuidv4} from 'uuid'

export default function Team(props) {
  const equipe = props.equipe
  return (
    <>
      <h1>
        {equipe.teamName} <Badge color="primary">{equipe.teamScore / 5}</Badge>
      </h1>
      {equipe.teamPlayers.map(player => {
        return (
          <li key={uuidv4()}>
            {player.username} <Badge color="primary">{player.userlvl}</Badge>
          </li>
        )
      })}
    </>
  )
}
