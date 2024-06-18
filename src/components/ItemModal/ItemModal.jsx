import "./ItemModal.css";

function ItemModal({ activeModal, selectedCard, handleClose }) {
  return (
    <div
      className={`modal ${activeModal === "preview-garment" && "modal_open"}`}
    >
      <div className="modal__content modal__content_type_image">
        <button
          type="click"
          className="modal__close"
          onClick={handleClose}
        ></button>
        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="modal__image-text">
          <h2 className="modal__clothing-info">{selectedCard.name}</h2>
          <h2 className="modal__clothing-info">
            Weather: {selectedCard.weather}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
