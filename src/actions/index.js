export const restartGame = correctAnswer => ({
    type: RESTART_GAME,
    correctAnswer, // payload
})

export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess,
})
