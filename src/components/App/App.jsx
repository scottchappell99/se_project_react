import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants.js";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: "999",
    city: "",
  });
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  useEffect(() => {
    if (!activeModal) return;
    const handleEscPress = (evt) => {
      evt.key === "Escape" && closeActiveModal();
    };
    window.addEventListener("keydown", handleEscPress);
    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, [activeModal]);

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleOutsideClick = (evt) => {
    evt.target.id === activeModal && closeActiveModal();
  };

  const handleCardClick = (card) => {
    setActiveModal("preview-garment");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    currentTempUnit === "F" ? setCurrentTempUnit("C") : setCurrentTempUnit("F");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleToggleSwitchChange }}
      >
        <div className="app__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/se_project_react/"
              element={
                <Main weatherData={weatherData} openCard={handleCardClick} />
              }
            />
            <Route
              path="/se_project_react/profile/"
              element={
                <Profile weatherData={weatherData} openCard={handleCardClick} />
              }
            />
          </Routes>
          <Footer />
        </div>
        <ModalWithForm
          buttonText="Add garment"
          title="New garment"
          activeModal={activeModal}
          handleClose={closeActiveModal}
          handleOutsideClick={handleOutsideClick}
          isOpen={activeModal === "add-garment"}
        >
          <label className="modal__label">
            Name
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label className="modal__label">
            Image
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__weather-legend">
              Select the weather type:
            </legend>
            <label className="modal__radio-label">
              <input
                type="radio"
                className="modal__radio-input"
                id="hot"
                name="weather"
              />
              <span className="modal__radio-text">Hot</span>
            </label>
            <label className="modal__radio-label">
              <input
                type="radio"
                className="modal__radio-input"
                id="warm"
                name="weather"
              />
              <span className="modal__radio-text">Warm</span>
            </label>
            <label className="modal__radio-label">
              <input
                type="radio"
                className="modal__radio-input"
                id="cold"
                name="weather"
              />
              <span className="modal__radio-text">Cold</span>
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          activeModal={activeModal}
          selectedCard={selectedCard}
          handleClose={closeActiveModal}
          handleOutsideClick={handleOutsideClick}
          isOpen={activeModal === "preview-garment"}
        />
      </CurrentTempUnitContext.Provider>
    </div>
  );
}

export default App;
