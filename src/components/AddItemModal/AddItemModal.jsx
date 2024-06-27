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
  const [link, setLink] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setLink(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddItem({ name, link, weather });
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
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          value={name}
          placeholder="Name"
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          value={link}
          placeholder="Image URL"
          onChange={handleUrlChange}
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
            value="hot"
            name="weather"
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
            onChange={handleWeatherChange}
          />
          <span className="modal__radio-text">Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
