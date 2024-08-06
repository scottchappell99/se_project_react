import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function AddItemModal({
  activeModal,
  closeActiveModal,
  handleOutsideClick,
  onAddItem,
  isOpen,
  isLoading,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const reset = () => {
      resetForm({
        name: "",
        imageUrl: "",
        weather: values.weather,
      });
    };
    onAddItem(values, reset);
  };

  return (
    <ModalWithForm
      buttonText={isLoading ? "Saving garment..." : "Add garment"}
      title="New garment"
      activeModal={activeModal}
      handleClose={closeActiveModal}
      handleOutsideClick={handleOutsideClick}
      handleSubmit={handleSubmit}
      isOpen={isOpen}
      isValid={isValid}
    >
      <label
        className={`modal__label ${
          errors.name === "" ? "" : "modal__label_error"
        }`}
      >
        Name {errors.name}
        <input
          type="text"
          className={`modal__input ${
            errors.name === "" ? "" : "modal__input_error"
          }`}
          id="name"
          value={values.name || ""}
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
      </label>
      <label
        className={`modal__label ${
          errors.imageUrl === "" ? "" : "modal__label_error"
        }`}
      >
        Image {errors.imageUrl}
        <input
          type="url"
          className={`modal__input ${
            errors.imageUrl === "" ? "" : "modal__input_error"
          }`}
          id="imageUrl"
          value={values.imageUrl || ""}
          name="imageUrl"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend
          className={`modal__weather-legend ${
            errors.weather === "" ? "" : "modal__weather-legend_error"
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <span className="modal__radio-text">Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
