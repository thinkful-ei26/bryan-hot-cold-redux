const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1,
}

export default (state = initialState, action) => {
    if (action.type === RESTART_GAME) {
        return Object.assign({}, state, {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: action.correctAnswer,
        })
    }

    if (action.type === MAKE_GUESS) {
        guess = parseInt(guess, 10)
        let feedback
        if (isNaN(guess)) {
            feedback: 'Please enter a valid number'
            return Object.assign({}, state, {
                feedback,
                guesses: [...state.guesses],
            })
        }

        const difference = Math.abs(guess - state.correctAnswer)

        if (difference >= 50) {
            feedback = "You're Ice Cold..."
        } else if (difference >= 30) {
            feedback = "You're Cold..."
        } else if (difference >= 10) {
            feedback = "You're Warm."
        } else if (difference >= 1) {
            feedback = "You're Hot!"
        } else {
            feedback = 'You got it!'
        }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess],
        })
    }
}
