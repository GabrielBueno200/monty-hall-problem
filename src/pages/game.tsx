import React from 'react'
import type { NextPage } from 'next'
import { Container, Doors, RestartButton } from '../styles/pages/game'
import { useGame } from '../contexts/game'
import Door from '../components/Door'
import { useRouter } from 'next/router'

const Game: NextPage = () => {
  const router = useRouter()
  const { doors } = useGame()

  const handleRestartGame = () => router.push('/')

  return (
    <Container>
      <Doors>
        {doors.map((door, idx) => (
          <Door {...door} key={idx} />
        ))}
      </Doors>

      <RestartButton onClick={handleRestartGame}>Reiniciar jogo</RestartButton>
    </Container>
  )
}

export default Game
