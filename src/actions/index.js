export const RESTART_GAME = 'RESTART_GAME'
export const restartGame = correctAnswer => ({
    type: RESTART_GAME,
    correctAnswer, // payload
})

export const MAKE_GUESS = 'MAKE_GUESS'
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess,
})

export const AURAL_STATUS = 'AURAL_STATUS'
export const auralStatus = status => ({
  type: AURAL_STATUS,
  status
})