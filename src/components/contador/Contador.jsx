import React, { Component } from 'react'

class Contador extends Component {

  state = {
    number: this.props.initialNumber || 0,
    step: this.props.initialStep || 1,
  }

  inc = () => {
    this.setState({
      number: this.state.number + this.state.step,
    })
  }

  dec = () => {
    this.setState({
      number: this.state.number - this.state.step,
    })
  }

  setPasso = (e) => {
    this.setState({
      step: +e.target.value,
    })
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <p>{this.state.number}</p>
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input id="passoInput" type="number" value={this.state.step} onChange={this.setPasso} />
        </div>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}

export default Contador