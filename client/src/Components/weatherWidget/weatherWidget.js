import { useEffect, useState } from "react";
import "./weatherWidget.css";

const kelvinToCelsius = (kelvin) => {
  const temp = Math.trunc(kelvin - 273.15);

  return Math.abs(temp) ? `${temp}${"\u00b0"}C` : `0${"\u00b0"}C`;
};

const pascalToMmHg = (pascal) => ((pascal / 133.3224) * 100).toFixed();

function WeatherWidget(props) {
  const [weather, setWeather] = useState();
  const [weatherIcon, setWeatherIcon] = useState("01d");
  const [wind, setWind] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${props.capitalCity}&appid=489c6e3b9c228bd88ea6333b1a07dfef`
    )
      .then((res) => res.json())
      .then((data) => {
        const temperatureInCelsius = kelvinToCelsius(data.main.temp);
        setWeatherIcon(data.weather[0].icon);
        setWeather(temperatureInCelsius);
        setWind(data.wind.speed);
        setHumidity(data.main.humidity);
        setPressure(data.main.pressure);
      });
  }, []);

  return (
    <div className="weather-widget">
      <p className="weather-widget__cityName">Weather in {props.capitalCity}</p>
      <div className="weather-widget__info">
        <span className="weather-widget__degree">{weather}</span>
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt="weatherIcon"
          className="weather-widget__icon"
        />
      </div>
      <div className="weather-widget__additional-info">
        <div className="weather-widget__additional-info-element">
          <img src="wind.svg" alt="wind" className="weather-widget__pictures" />
          <span>{wind} m/s</span>
        </div>
        <div className="weather-widget__additional-info-element">
          <img
            src="droplets.svg"
            alt="droplets"
            className="weather-widget__pictures"
          />
          <span>{humidity} %</span>
        </div>
        <div className="weather-widget__additional-info-element">
          <img
            src="pressure.svg"
            alt="pressure"
            className="weather-widget__pictures"
          />
          <span>{pascalToMmHg(pressure)} mm</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;
