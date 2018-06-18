import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Poke.css'
import PokemonName from './PokemonName'

class Pokemon extends Component {
  state = {
    id: '',
  }

  handleChange = (ev) => {
    this.setState({ id: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.id}`)
  }

  render() {
    return (
      <div className="Pokemon">
        <img
          src="http://backgroundcheckall.com/wp-content/uploads/2017/12/pokemon-logo-transparent-background-2.png"
          alt="pokemon"
          className="logo"
        />

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="number"
              value={this.state.id}
              onChange={this.handleChange}
              min="1"
              max="882"
            />
          </div>
          <div>
            <button type="submit">
              Look up Pokemon
            </button>
          </div>
        </form>

        <Route path="/pokemon/:id" component={PokemonName} />
      </div>
    )
  }
}

export default Pokemon