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
