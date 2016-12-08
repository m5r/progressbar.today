import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
	this.name = "ProgressBar";
    this.state = {
      date: new Date(),
      value: 0
    };
  }

  componentDidMount() {
    this.tick();
    this.timer = setInterval(
      () => this.tick(),
      50
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date(),
      value: this.getPercentage()
    });
  }

  getPercentage() {
    return (((this.state.date.getSeconds() / 60) + this.state.date.getMilliseconds() / 1000 / 60) * 100).toFixed(2);
  }

  render() {
    return (
      <div className="progressBarContainer">
        <span>{this.name}</span>
        <span style={{float: "right"}}>{this.state.value}%</span>
        <MuiThemeProvider>
          <LinearProgress mode="determinate" value={Number(this.state.value)} style={{width:"100%", margin: "auto"}} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export class Minute extends ProgressBar {
  constructor(props) {
    super(props);
    this.name = "Minute";
  }

  getPercentage() {
    return (((this.state.date.getSeconds() * 1000 + this.state.date.getMilliseconds()) / 60000) * 100).toFixed(2);
  }
}

export class Hour extends ProgressBar {
  constructor(props) {
    super(props);
    this.name = "Hour";
  }
  
  getPercentage() {
    return (((this.state.date.getMinutes() * 60 + this.state.date.getSeconds()) / 3600) * 100).toFixed(2);
  }
}

export class Day extends ProgressBar {
  constructor(props) {
    super(props);
    this.name = "Day";
  }
  
  getPercentage() {
    return (((this.state.date.getHours() * 3600 + this.state.date.getMinutes() * 60 + this.state.date.getSeconds()) / (24*3600)) * 100).toFixed(2);
  }
}