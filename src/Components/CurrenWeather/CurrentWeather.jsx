import React from 'react';
import {icons} from "./icons";
import windSpeed from "../../assets/icons/45.svg";

function CurrentWeather({weather}) {

  const getIconAndDescription = (weatherCode, is_day) => {
    const data = icons[weatherCode];
    if (is_day) return data.day;
    return data.night;
  }


  if (!weather) return null;


  const {image, description} = getIconAndDescription(weather.current_weather.weathercode, weather.current_weather.is_day);


  return (
    <div className={"card bg-weather-card text-light"}>
      <div className={"d-flex text-small justify-content-between"}>
        <span className={"fw-normal"}>{new Date(weather.current_weather.time).toDateString()}</span>
        <span className={"fw-normal"}>{new Date(weather.current_weather.time).toLocaleTimeString("en",{hour12: true, hour: '2-digit', minute:"2-digit", timeZone: weather.timezone})}</span>
      </div>
      <div className={"d-flex justify-content-between"}>
        <div className={"d-flex mt-3 justify-content-center w-fit-content"} >
          <img as={"svg"} className={"weather-icon me-1"} src={image} alt={"weather"}/>
          <div className={"d-flex flex-column mx-auto"}>
            <h1 className={"fw-black"}>{weather.current_weather.temperature} {weather.hourly_units.temperature_2m}</h1>
            <span className={"text-secondary fw-normal"}>{description}</span>
          </div>
        </div>
        <div>
          <div className={"d-flex align-items-center"}>
            <img src={windSpeed} alt={"windspeed"}  width={16} color={'red'} as={"svg"} />
            <span className={"text-small fw-normal ms-1"} style={{fontSize: 10}}>Wind Speed: {weather.current_weather.windspeed}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
