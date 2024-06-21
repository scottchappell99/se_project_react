import { useState, useEffect } from "react";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants.js";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: "999",
    city: "",
  });
  const [selectedCard, setSelectedCard] = useState({});
  const [isOpen, setIsOpen] = useState({
    modalWithForm: false,
    itemModal: false,
  });

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
    setIsOpen({ modalWithForm: true });
  };

  const closeActiveModal = () => {
    setActiveModal("");
    setIsOpen({
      modalWithForm: false,
      itemModal: false,
    });
  };

  const handleOutsideClick = (evt) => {
    evt.target.id === activeModal && closeActiveModal();
  };

  const handleCardClick = (card) => {
    setActiveModal("preview-garment");
    setSelectedCard(card);
    setIsOpen({ itemModal: true });
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
      <div className="app__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} openCard={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        buttonText="Add garment"
        title="New garment"
        activeModal={activeModal}
        handleClose={closeActiveModal}
        handleOutsideClick={handleOutsideClick}
        isOpen={isOpen}
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
        isOpen={isOpen}
      />
    </div>
  );
}

export default App;
