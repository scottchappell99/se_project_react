import "./DeleteConfirmModal.css";

function DeleteConfirmModal({
  activeModal,
  selectedCard,
  handleClose,
  handleOutsideClick,
  isOpen,
}) {
  return (
    <div
      onClick={handleOutsideClick}
      className={`modal ${isOpen && "modal_open"}`}
      id={isOpen ? activeModal : undefined}
    >
      <div className="modal__content modal__content_type_delete-confirm">
        <button
          onClick={handleClose}
          type="button"
          className="modal__close"
        ></button>
        <p className="modal__delete-text">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>
        <button className="modal__delete_type_confirm">Yes, delete item</button>
        <button className="modal__delete_type_cancel">Cancel</button>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;
