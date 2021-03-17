import React from "react";
import "./CountryTime.css";
import { useStore } from '../../redux/store';
class CountryTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      hours: 0,
    };
  }

  componentDidMount() {
    const { lat, lon } = this.props;
    fetch(
      `http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lon}&username=nolibev804`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const [, time] = data.time.split(" ");
        const [hour, min] = time.split(":");
        this.setState({
          minutes: +min,
          hours: +hour,
        });
      });
    setInterval(() => {
      if (this.state.hours > 22 && this.state.minutes > 58) {
        this.setState({ minutes: 0, hours: 0 });
      } else if (this.state.minutes > 58) {
        this.setState({ minutes: 0, hours: this.state.hours + 1 });
      } else {
        this.setState({ minutes: this.state.minutes + 1 });
      }
    }, 60000);
  }

  render() {
    return (
      <div className='time-info'>
        <p className='time-info__city-name'>{this.props.title} {this.props.cityName}</p>
        <span className='time-info__time'>
          {`${
            this.state.hours < 10 ? `0${this.state.hours}` : this.state.hours
          }:${
            this.state.minutes < 10
              ? `0${this.state.minutes}`
              : this.state.minutes
          }`}
        </span>
      </div>
    );
  }
}

export default CountryTime;
