import React, { Component } from 'react';
import { useEffect } from 'react';
import { StyledCountdown, StyledButton, StyledForm, StyledInput, StyledDiv, StyledImg } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

interface Props {

}

interface State {
  time:  any;
  textInput: string;
  startTime: number;
  currentTime: number;
  reset: boolean;
}

export class Countdown extends React.Component<Props, State> {
  private timer: any;

  state: State = {
    time: null,
    textInput: '',
    startTime: 0,
    currentTime: 0,
    reset: false,
  };

  stopTimer() {
    clearInterval(this.timer)
  }

  startTimer = () =>  {
    this.timer = setInterval(() => {
      let theSeconds,
          theMinutes,
          currentTime;

      currentTime = this.state.currentTime;

      this.setState(currentState => {
        if (currentState.currentTime === 0) {
          this.stopTimer();
          return {
            ...currentState,
            currentTime: currentState.startTime
          };
        } else {
          return {
            ...currentState,
            currentTime: currentState.currentTime - 1
          }
        }
      })

      theMinutes = Math.floor(currentTime / 60);
      theSeconds = currentTime % 60;

      if (theSeconds < 10) {
        theSeconds = `0${theSeconds}`;
      }

      this.setState({
        time: `${theMinutes}:${theSeconds}`
      })

      if (currentTime === 0) {
        this.stopTimer()
      }

    }, 1000);
  }

  updateTextInput(event:any) {
    this.setState({
      textInput: event.target.value,
      currentTime: event.target.value
    })
  }

  reset() {
    clearInterval(this.timer)

     this.setState({
        reset: true,
        startTime: 0,
        currentTime: 0,
        time: null,
        textInput: ''
      })
  }

  render() {
    return (
      <StyledCountdown>
        <StyledImg src="koala-logo.png" />
        <h1>Countdown Clock</h1>
        <p>Enter the time in seconds</p>
        <StyledDiv>
          <StyledInput
            type="text"
            onChange={this.updateTextInput.bind(this)}
            name="textInput"
            value={this.state.textInput}
          />
        </StyledDiv>
        <h2>{this.state.time}</h2>
        <StyledDiv>
          <StyledButton
             onClick={this.startTimer.bind(this)}>
             <FontAwesomeIcon icon={faPlay} />
          </StyledButton>
          <StyledButton
             onClick={this.stopTimer.bind(this)}>
             <FontAwesomeIcon icon={faPause} />
          </StyledButton>
          <StyledButton
            onClick={this.reset.bind(this)}
          > <FontAwesomeIcon icon={faCheck} />
          </StyledButton>
        </StyledDiv>
      </StyledCountdown>
    )
  }
}
