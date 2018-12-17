import React from 'react'

import Header from './header'
import GuessSection from './guess-section'
import StatusSection from './status-section'
import InfoSection from './info-section'

const Game = () => {
  return (
    <div>
      <Header />
      <main role='main'>
        <GuessSection />
        <StatusSection />
        <InfoSection />
      </main>
    </div>
  )
}

export default Game
