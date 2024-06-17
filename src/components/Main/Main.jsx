import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";

function Main() {
  return (
    <main className="main">
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">
          Today is 75 &deg; F / You may want to wear:
        </p>
      </section>
    </main>
  );
}

export default Main;
