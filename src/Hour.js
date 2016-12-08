import ProgressBar from './ProgressBar';

export default class Minute extends ProgressBar {
  constructor(props) {
    super(props);
    this.name = "Hour";
  }
  
  getPercentage() {
    return (((this.state.date.getMinutes() * 60 + this.state.date.getSeconds()) / 3600) * 100).toFixed(2);
  }
}