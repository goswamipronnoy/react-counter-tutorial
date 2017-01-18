import React from 'react';
import classes from './Counter.css'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  getInitialState = () => {
    return {
      count: 0
    }
  };

  render() {
    return (
      <div className={classes.button}>
      <h1> My simple one-Click Counter! :)</h1>
        <h2>{this.state.count}</h2>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}

export default Counter;
