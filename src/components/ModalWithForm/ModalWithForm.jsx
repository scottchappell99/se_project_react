import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleClose,
  handleOutsideClick,
  isOpen,
  handleSubmit,
  isError,
}) {
  const resetForm = (evt) => {
    evt.target.reset();
  };

  return (
    <div
      className={`modal ${isOpen && "modal_open"}`}
      onClick={handleOutsideClick}
      id={isOpen ? activeModal : undefined}
    >
      <div className="modal__content modal__content_type_form">
        <h2 className="modal__title">{title}</h2>
        <button onClick={handleClose} type="button" className="modal__close" />
        <form className="modal__form" onSubmit={(evt) => handleSubmit(evt)}>
          {children}
          <button type="submit" className="modal__submit" disabled={isError}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
