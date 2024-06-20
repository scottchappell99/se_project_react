import "./Main.css";
import { defaultClothingItems } from "../../utils/constants.js";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import randomizeImage from "../../assets/randomize.svg";

function Main({ weatherData, openCard }) {
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp}&deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard key={item._id} item={item} openCard={openCard} />
              );
            })}
        </ul>
        <button type="button" className="cards__randomize">
          <img
            src={randomizeImage}
            alt="An arrow from the right, circling around under, going to the top"
            className="cards__randomize-image"
          />
          Randomize
        </button>
      </section>
    </main>
  );
}

export default Main;
