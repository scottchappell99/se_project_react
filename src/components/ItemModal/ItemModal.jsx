import { useContext } from "react";
import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({
  activeModal,
  selectedCard,
  handleClose,
  handleOutsideClick,
  isOpen,
  handleDeleteClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwned = selectedCard.owner === currentUser._id;

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
            className={
              isOwned ? "modal__delete" : "modal__delete modal__delete_hidden"
            }
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
