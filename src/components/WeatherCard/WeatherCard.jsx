import "./WeatherCard.css";
import sunnyDay from "../../assets/weather-images/sunny-day.png";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__info">{weatherData.temp}&deg; F</p>
      <img src={sunnyDay} alt="It's Sunny!" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
