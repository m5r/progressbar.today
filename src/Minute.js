import ProgressBar from './ProgressBar';

export default class Minute extends ProgressBar {
  constructor(props) {
    super(props);
    this.name = "Minute";
  }

  getPercentage() {
    return (((this.state.date.getSeconds() * 1000 + this.state.date.getMilliseconds()) / 60000) * 100).toFixed(2);
  }
}