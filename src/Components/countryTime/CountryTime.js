import { useState, useEffect } from "react";

function CountryTime(props) {
  const [time, setTime] = useState();
  const { lat, lon } = props;
  useEffect(() => {
    fetch(
      `http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lon}&username=nolibev804`
    )
      .then((res) => res.json())
      .then((data) => setTime(data.time));
  }, []);

  return <div>{time}</div>;
}

export default CountryTime;
