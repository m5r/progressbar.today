import ProgressBar from './ProgressBar';

export default class Minute extends ProgressBar {
  constructor(props) {
    super(props);
    this.name = "Day";
  }
  
  getPercentage() {
    return (((this.state.date.getHours() * 3600 + this.state.date.getMinutes() * 60 + this.state.date.getSeconds()) / (24*3600)) * 100).toFixed(2);
  }
}