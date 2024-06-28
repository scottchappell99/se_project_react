import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import randomizeImage from "../../assets/randomize.svg";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext.js";
import { useContext } from "react";

function Main({ weatherData, openCard, clothingItems }) {
  const tempUnit = useContext(CurrentTempUnitContext);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          {`Today is ${weatherData.temp[tempUnit.currentTempUnit]}\u00B0 ${
            tempUnit.currentTempUnit
          } / You may want to wear:`}
        </p>
        <ul className="cards__list">
          {clothingItems
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
