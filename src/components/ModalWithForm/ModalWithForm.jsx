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
  isValid,
  modalAddition,
  changeModal,
}) {
  return (
    <div
      className={`modal ${isOpen && "modal_open"}`}
      onClick={handleOutsideClick}
      id={isOpen ? activeModal : undefined}
    >
      <div className="modal__content modal__content_type_form">
        <h2 className="modal__title">{title}</h2>
        <button onClick={handleClose} type="button" className="modal__close" />
        <form className="modal__form" onSubmit={handleSubmit}>
          {children}
          <div className="modal__footer">
            <button type="submit" className="modal__submit" disabled={!isValid}>
              {buttonText}
            </button>
            <p onClick={changeModal} className="modal__addition">
              {modalAddition || ""}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
