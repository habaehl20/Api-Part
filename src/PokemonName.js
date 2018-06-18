import React, { Component } from 'react'

class PokemonName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: {}
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { params } = this.props.match
    fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${params.id}`)
      .then(response => response.json())
      .then(name=> this.setState({ name}))
  }

  render() {
    const { name} = this.state

    return (
      <div className="Pokemon">
          <h1>Pokemon: {name.name} </h1>
        <h3>id: {name.id}</h3>
        <h3>Weight: {name.weight}</h3>
        <h3>Height: {name.height}</h3>
      </div>
    )
  }
}

export default PokemonName