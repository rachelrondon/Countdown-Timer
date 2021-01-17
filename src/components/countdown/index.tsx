import React, { Component } from 'react';
import { StyledCountdown } from './styles';

// Write your countdown code in this component

interface TheProps {

}

interface TheState {
  time: any,
}

export class Countdown extends React.Component<TheProps, TheState> {
  private timer: any;

  state: TheState = {
    time: ""
  };

  updateTime(event:any) {
    this.setState({
      time: event.target.value
    })
  }

  startCountdown() {
      if (this.state.time > 0) {
        this.setState({
          time: this.state.time - 1
        });
      } else {
        clearInterval(this.timer!)
      }
  }

  handleSubmit() {
    let theDelay = this.state.time * 1000;

    this.timer = setInterval(() => {
      this.startCountdown();
    }, theDelay);
  }

  reset() {
    this.setState({
      time: ""
    })
  }

  render() {
    return (
      <StyledCountdown>
        <img src="koala-logo.png" />
        <h1>Koala Web Engineer Coding Challenge</h1>
        <p>Build a countdown clock!</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Time</label>
          <input type="text" value={this.state.time} onChange={this.updateTime.bind(this)} name="time"></input>
          <div style={{ border: '.5px solid gray', width: 50, borderRadius: '3px', background: '#EFEFEF', padding: 3 }}>
            <div onClick={this.startCountdown.bind(this)}>Start</div>
          </div>
          <button onClick={this.reset.bind(this)}>Reset</button>
        </form>
        <p>{this.state.time}</p>
      </StyledCountdown>
    )
  }
}
