import Search from "./Components/Search";
import CurrentWeather from "./Components/CurrenWeather/CurrentWeather";
import Weather from "./api/weather";
import {useRef, useState} from "react";
import ForecastWeather from "./Components/ForecastWeather/ForecaastWeather";

const logo = require('./assets/logo/islam.signature.svg').default;

function App() {

  const [weatherData, setWeatherData] = useState();
  const [forecast, setForecast] = useState([]);

  const forecastRef = useRef();

  const onSearch = (data) => {
    new Weather().getWeather(data.longitude, data.latitude, data.timezone)
      .then((weather) => {
        setWeatherData(weather.data)
        setForecast(new Weather(weather.data.hourly).getForecast())
      })
  }

  const handelScroll = ({isLeft}) => {
    if (isLeft) return forecastRef.current.scrollLeft -= 100;

    forecastRef.current.scrollLeft += 100;
  }
  return (
    <div className={"container mb-0 mt-0"} style={{overflow: "hidden", width: 500}}>
      <img src={logo} className={"ms-3 logo"} style={{width: 64}} alt={"islam"}/>
      <div className={"d-flex flex-column"} style={{height: "100dvh", overflow: "hidden"}}>
        <Search onSearch={onSearch}/>
        <div className={"mt-5"}>
          <CurrentWeather weather={weatherData}/>
        </div>

        {forecast?.length ? (
          <>
            <span className={"text-light fw-medium fw-black text-center mt-3"}>#Forecast Weather</span>
            <div className={"d-flex align-items-center "}>

                <span
                  className={"text-light fw-black me-3 cursor-pointer scroll-btn"}
                  onClick={() => handelScroll({isLeft: true})}
                > &lt; </span>

              <div ref={forecastRef} id={"forecastContainer"}
                   className={"d-flex justify-content-between forecast-container gap-3 mt-3 custom-effect"}
                   style={{maxWidth: "100%", overflowX: "auto"}}>
                {forecast?.map((weather, index) => <ForecastWeather key={index} weather={weather}/>)}
              </div>

              <span
                className={"text-light fw-black ms-3 cursor-pointer scroll-btn"}
                onClick={handelScroll}> &gt; </span>

            </div>
          </>
        ) : null}

      </div>
    </div>
  );
}

export default App;
