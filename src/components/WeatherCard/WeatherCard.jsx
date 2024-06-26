import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";
import { useContext } from "react";

function WeatherCard({ weatherData }) {
  const tempUnit = useContext(CurrentTempUnitContext);
  const filteredWeather = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let currentWeather;
  filteredWeather.length === 0
    ? (currentWeather =
        defaultWeatherOptions[weatherData.isDay ? "day" : "night"])
    : (currentWeather = filteredWeather[0]);

  return (
    <section className="weather-card">
      <p className="weather-card__info">
        {`${weatherData.temp[tempUnit.currentTempUnit]}\u00B0 ${
          tempUnit.currentTempUnit
        }`}
      </p>
      <img
        src={currentWeather?.url}
        alt={`It's ${weatherData.condition} outside to${
          weatherData.isDay ? "day" : "night"
        }!`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
