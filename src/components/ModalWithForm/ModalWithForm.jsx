import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleClose,
  isOpen,
  handleOutsideClick,
}) {
  return (
    <div
      className={`modal ${activeModal === isOpen && "modal_open"}`}
      onClick={handleOutsideClick}
      id={activeModal === isOpen && activeModal}
    >
      <div className="modal__content modal__content_type_form">
        <h2 className="modal__title">{title}</h2>
        <button onClick={handleClose} type="button" className="modal__close" />
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit" disabled>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
