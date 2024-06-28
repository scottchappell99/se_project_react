import "./ItemModal.css";

function ItemModal({
  activeModal,
  selectedCard,
  handleClose,
  handleOutsideClick,
  isOpen,
  handleDeleteClick,
}) {
  return (
    <div
      onClick={handleOutsideClick}
      className={`modal ${isOpen && "modal_open"}`}
      id={isOpen ? activeModal : undefined}
    >
      <div className="modal__content modal__content_type_image">
        <button
          type="click"
          className="modal__close"
          onClick={handleClose}
        ></button>
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="modal__text-box">
          <div className="modal__image-text">
            <h2 className="modal__clothing-info">{selectedCard.name}</h2>
            <h2 className="modal__clothing-info">
              Weather: {selectedCard.weather}
            </h2>
          </div>
          <button
            onClick={() => handleDeleteClick(selectedCard)}
            type="button"
            className="modal__delete"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
