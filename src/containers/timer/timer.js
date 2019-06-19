import React, { Component } from "react";
import ControlPanel from "../../components/controlPanel";
import Countdown from "../../components/countdown";
import Display from "../../components/display";
import Keypad from "../../components/keypad";
import { TIMER_PHASES, TIME_PARTS } from "../../constants";
import { convertToMilliseconds } from "../../libs";
import styles from "./styles.module.scss";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputSelected: TIME_PARTS.SECOND,
      inputValues: {
        hour: 0,
        minute: 0,
        second: 0
      },
      state: TIMER_PHASES.DEFAULT,
      time: 0
    };

    this.timer = null;
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  clearTimer = () => {
    clearInterval(this.timer);
    this.timer = null;
  };

  handleSelectInput = (event) => {
    const type = event.target.name;

    this.setState({ inputSelected: type });
  };

  handleOnChange = (event) => {
    event.preventDefault();
  };

  handleKeyClick = (event) => {
    const value = event.target.value;
    const { inputSelected, inputValues } = this.state;

    this.setState((prevState) => {
      const newInputValues = { ...prevState.inputValues };
      const newValue = `${inputValues[inputSelected]}${value}`.slice(-2);

      newInputValues[inputSelected] =
        inputSelected === TIME_PARTS.HOUR
          ? +newValue < 100
            ? newValue
            : 0
          : +newValue < 60
          ? newValue
          : 0;

      const { hour, minute, second } = newInputValues;

      return {
        inputValues: newInputValues,
        time: convertToMilliseconds(hour, minute, second)
      };
    });
  };

  handleStartTimer = () => {
    const { time, state } = this.state;

    if (
      (state === TIMER_PHASES.DEFAULT || state === TIMER_PHASES.HALTED) &&
      time > 0
    ) {
      this.setState({ state: TIMER_PHASES.STARTED });

      this.timer = setInterval(() => {
        this.setState((prevState) => {
          if (prevState.state === TIMER_PHASES.STARTED && prevState.time > 0) {
            return {
              time: prevState.time - 15
            };
          }

          this.clearTimer();

          return {
            inputValues: { hour: 0, minute: 0, second: 0 },
            state: TIMER_PHASES.DEFAULT,
            time: 0
          };
        });
      }, 15);
    }
  };

  handleStopTimer = () => {
    this.clearTimer();

    this.setState({ state: TIMER_PHASES.HALTED });
  };

  handleResetTimer = () => {
    this.clearTimer();

    this.setState({
      inputSelected: TIME_PARTS.SECOND,
      inputValues: { hour: 0, minute: 0, second: 0 },
      state: TIMER_PHASES.DEFAULT,
      time: 0
    });
  };

  render() {
    const { inputSelected, inputValues, keys, state, time } = this.state;

    return (
      <div className={styles.timer}>
        {state === TIMER_PHASES.DEFAULT ? (
          <React.Fragment>
            <Display
              selected={inputSelected}
              onChange={this.handleOnChange}
              onFocus={this.handleSelectInput}
              values={inputValues}
            />
            <Keypad keys={keys} onKeyClick={this.handleKeyClick} />
          </React.Fragment>
        ) : (
          <Countdown time={time} />
        )}

        <ControlPanel
          canStart={!time}
          onReset={this.handleResetTimer}
          onStart={this.handleStartTimer}
          onStop={this.handleStopTimer}
          state={state}
        />
      </div>
    );
  }
}

export default Timer;
