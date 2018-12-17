import React, { Component } from 'react'
import { connect } from 'react-redux'
import './guess-form.css'
import { makeGuess } from '../actions'

export class GuessForm extends Component {
  onSubmit(event) {
    event.preventDefault()

    const value = this.input.value
    console.log(value)
    
      console.log(this)
      console.log(this.props)
      this.props.dispatch(makeGuess(value))
    this.input.value = ''
    this.input.focus()
  }

  //todo log all actions as they go through the reducer

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type='number'
          name='userGuess'
          id='userGuess'
          className='text'
          min='1'
          max='100'
          autoComplete='off'
          aria-labelledby='feedback'
          ref={input => (this.input = input)}
          required
        />
        <button type='submit' name='submit' id='guessButton' className='button'>
          Guess
        </button>
      </form>
    )
  }
}

export default connect ()(GuessForm)