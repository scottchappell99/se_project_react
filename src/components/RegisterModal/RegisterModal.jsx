import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function RegisterModal({
  activeModal,
  handleClose,
  handleOutsideClick,
  onRegister,
  isOpen,
  isLoading,
  changeModal,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const reset = () => {
      resetForm({
        email: "",
        password: "",
        name: "",
        avatar: "",
      });
    };
    onRegister(values, reset);
  };

  return (
    <ModalWithForm
      buttonText={isLoading ? "Registering..." : "Sign Up"}
      title="Sign Up"
      activeModal={activeModal}
      handleClose={handleClose}
      handleOutsideClick={handleOutsideClick}
      handleSubmit={handleSubmit}
      isOpen={isOpen}
      isValid={isValid}
      modalAddition="or Log In"
      changeModal={changeModal}
    >
      <label
        className={`modal__label ${
          errors.email === "" ? "" : "modal__label_error"
        }`}
      >
        Email* {errors.email}
        <input
          type="email"
          className={`modal__input ${
            errors.email === "" ? "" : "modal__input_error"
          }`}
          id="email-register"
          value={values.email || ""}
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
      </label>
      <label
        className={`modal__label ${
          errors.password === "" ? "" : "modal__label_error"
        }`}
      >
        Password* {errors.password}
        <input
          type="password"
          className={`modal__input ${
            errors.password === "" ? "" : "modal__input_error"
          }`}
          id="password-register"
          value={values.password || ""}
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </label>
      <label
        className={`modal__label ${
          errors.name === "" ? "" : "modal__label_error"
        }`}
      >
        Name* {errors.name}
        <input
          type="text"
          className={`modal__input ${
            errors.name === "" ? "" : "modal__input_error"
          }`}
          id="name-register"
          value={values.name || ""}
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
      </label>
      <label
        className={`modal__label ${
          errors.avatar === "" ? "" : "modal__label_error"
        }`}
      >
        Avatar URL* {errors.avatar}
        <input
          type="url"
          className={`modal__input ${
            errors.avatar === "" ? "" : "modal__input_error"
          }`}
          id="avatar-register"
          value={values.avatar || ""}
          name="avatar"
          placeholder="Avatar URL"
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
