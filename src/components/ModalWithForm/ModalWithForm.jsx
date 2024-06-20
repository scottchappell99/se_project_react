import { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleClose,
}) {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      e.target.classList.contains("modal") && handleClose();
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener(`click`, handleOutsideClick);
    };
  }, [handleClose]);

  return (
    <div className={`modal ${activeModal === "add-garment" && "modal_open"}`}>
      <div className="modal__content modal__content_type_form">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleClose}
          type="button"
          className="modal__close"
        ></button>
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
