import axios from "axios";

class WeatherApi {


  constructor(hourly) {
    this.hourly = hourly || null;
    this.temperatureSymbol = "°C"
  }


  getForecast() {
    if (!this.hourly) return null;
    const final = []
    const isDayArray = this.hourly.is_day;
    const temperaturesArray = this.hourly.temperature_2m;
    const weatherCodeArray = this.hourly.weathercode;

    for (let i = 0; i < this.hourly.time.length; i++) {
      final.push({
        time: this.hourly.time[i],
        temperature: temperaturesArray[i],
        weathercode: weatherCodeArray[i],
        isDay: isDayArray[i],
        temperatureSymbol: this.temperatureSymbol
      });
    }

    return final;
  }


  async getWeather(long, lat, timezone) {
    const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weathercode,is_day&current_weather=true&forecast_days=1&timezone=${timezone}`;

    return axios.get(endpoint);
  }

  searchForCities(query) {
    const endpoint = `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=en&format=json`;
    return axios.get(endpoint);
  }

  static generateOptions(cities) {
    return cities.map(city => ({
      value: `latitude=${city.latitude}&longitude=${city.longitude}`,
      label: city.name,
      country: city.country,
      countryCode: city.country_code,
      timezone: city.timezone,
      longitude: city.longitude,
      latitude: city.latitude,
    }));
  }
}

export default WeatherApi;
