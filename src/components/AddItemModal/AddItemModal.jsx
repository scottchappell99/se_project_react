import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function AddItemModal({
  activeModal,
  closeActiveModal,
  handleOutsideClick,
  onAddItem,
  isOpen,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");
  const [nameValidation, setNameValidation] = useState(false);
  const [urlValidation, setUrlValidation] = useState(false);
  const [weatherValidation, setWeatherValidation] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [urlErrorMessage, setUrlErrorMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!e.target.validity.valid) {
      setNameValidation(false);
      setNameErrorMessage(e.target.validationMessage);
    } else {
      setNameValidation(true);
      setNameErrorMessage("");
    }
  };

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
    if (!e.target.validity.valid) {
      setUrlValidation(false);
      setUrlErrorMessage(e.target.validationMessage);
    } else {
      setUrlValidation(true);
      setUrlErrorMessage("");
    }
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
    if (!e.target.validity.valid) {
      setWeatherValidation(false);
    } else {
      setWeatherValidation(true);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New garment"
      activeModal={activeModal}
      handleClose={closeActiveModal}
      handleOutsideClick={handleOutsideClick}
      handleSubmit={handleSubmit}
      isOpen={isOpen}
      isError={!nameValidation || !urlValidation || !weatherValidation}
    >
      <label
        className={`modal__label ${nameValidation ? "" : "modal__label_error"}`}
      >
        Name {nameErrorMessage}
        <input
          type="text"
          className={`modal__input ${
            nameValidation ? "" : "modal__input_error"
          }`}
          id="name"
          value={name}
          placeholder="Name"
          onChange={handleNameChange}
          required
        />
      </label>
      <label
        className={`modal__label ${urlValidation ? "" : "modal__label_error"}`}
      >
        Image {urlErrorMessage}
        <input
          type="url"
          className={`modal__input ${
            urlValidation ? "" : "modal__input_error"
          }`}
          id="imageUrl"
          value={imageUrl}
          placeholder="Image URL"
          onChange={handleUrlChange}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend
          className={`modal__weather-legend ${
            weatherValidation ? "" : "modal__weather-legend_error"
          }`}
        >
          Select the weather type:
        </legend>
        <label className="modal__radio-label">
          <input
            type="radio"
            className="modal__radio-input"
            id="hot"
            value="hot"
            name="weather"
            required
            onChange={handleWeatherChange}
          />
          <span className="modal__radio-text">Hot</span>
        </label>
        <label className="modal__radio-label">
          <input
            type="radio"
            className="modal__radio-input"
            id="warm"
            value="warm"
            name="weather"
            required
            onChange={handleWeatherChange}
          />
          <span className="modal__radio-text">Warm</span>
        </label>
        <label className="modal__radio-label">
          <input
            type="radio"
            className="modal__radio-input"
            id="cold"
            value="cold"
            name="weather"
            required
            onChange={handleWeatherChange}
          />
          <span className="modal__radio-text">Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
