import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function LoginModal({
  activeModal,
  handleClose,
  handleOutsideClick,
  onLogIn,
  isOpen,
  isLoading,
}) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const reset = () => {
      resetForm({
        email: "",
        password: "",
      });
    };
    onLogIn(values, reset);
  };

  return (
    <ModalWithForm
      buttonText={isLoading ? "Logging in..." : "Log in"}
      title="Log In"
      activeModal={activeModal}
      handleClose={handleClose}
      handleOutsideClick={handleOutsideClick}
      handleSubmit={handleSubmit}
      isOpen={isOpen}
      isValid={isValid}
    >
      <label
        className={`modal__label ${
          errors.email === "" ? "" : "modal__label_error"
        }`}
      >
        Email {errors.email}
        <input
          type="email"
          className={`modal__input ${
            errors.email === "" ? "" : "modal__input_error"
          }`}
          id="email"
          value={values.email || ""}
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
      </label>
      <label
        className={`modal__label ${
          errors.email === "" ? "" : "modal__label_error"
        }`}
      >
        Password {errors.password}
        <input
          type="password"
          className={`modal__input ${
            errors.password === "" ? "" : "modal__input_error"
          }`}
          id="password"
          value={values.password || ""}
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
