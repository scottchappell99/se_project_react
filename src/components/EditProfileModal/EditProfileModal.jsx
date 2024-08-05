import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfileModal({
  activeModal,
  handleClose,
  handleOutsideClick,
  onEditProfile,
  isOpen,
  isLoading,
}) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (isOpen) {
      setValues(currentUser);
    }
  }, [currentUser, isOpen]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const reset = () => {
      resetForm({
        name: "",
        avatar: "",
      });
    };
    onEditProfile(values, reset);
  };

  return (
    <ModalWithForm
      buttonText={isLoading ? "Saving..." : "Save changes"}
      title="Change profile data"
      activeModal={activeModal}
      handleClose={handleClose}
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
        Name* {errors.name}
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
          errors.avatar === "" ? "" : "modal__label_error"
        }`}
      >
        Avatar * {errors.avatar}
        <input
          type="url"
          className={`modal__input ${
            errors.avatar === "" ? "" : "modal__input_error"
          }`}
          id="avatar"
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

export default EditProfileModal;
