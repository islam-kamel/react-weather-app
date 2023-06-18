import React from 'react';
import {icons} from "../CurrenWeather/icons";


function ForecastWeather({weather}) {
  const getIconAndDescription = (weatherCode, is_day) => {
    const data = icons[weatherCode];
    if (is_day) return data.day;
    return data.night;
  }


  if (!weather) return null;


  const {
    image,
    description
  } = getIconAndDescription(weather.weathercode, weather.is_day);

  return (
    <div className={"card bg-weather-card text-light w-fit-content d-flex flex-shrink-0 flex-column align-items-center"}>

      <div className={"d-flex flex-column text-small justify-content-between text-center"}>
        <span className={"fw-normal"}>{new Date(weather.time).toDateString()}</span>
        <span className={"fw-normal mt-1"}>{new Date(weather.time).toLocaleTimeString("en", {
          hour12: true,
          hour: '2-digit',
          minute: "2-digit",
          timeZone: weather.timezone
        })}</span>
      </div>

      <div className={"d-flex flex-column align-items-center text-center mt-3 justify-content-center w-fit-content"}>
        <img as={"svg"} className={"weather-icon me-1"} src={image} alt={"weather"}/>
        <div className={"d-flex flex-column mx-auto"}>
          <h3
            className={"fw-black mt-3"}>{weather.temperature} {weather.temperatureSymbol}</h3>
          <span className={"text-secondary fw-normal"}>{description}</span>
        </div>
      </div>
    </div>
  );
}

export default ForecastWeather;
