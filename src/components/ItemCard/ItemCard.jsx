import { useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, openCard, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const handleLike = (evt) => {
    evt.stopPropagation();
    if (item.likes.isArray && item.likes.includes(currentUser._id)) {
      item.isLiked = true;
    } else {
      item.isLiked = false;
    }
    onCardLike(item);
  };

  return (
    <li
      className="card"
      onClick={() => {
        openCard(item);
      }}
    >
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        <button
          className={
            isLoggedIn
              ? item.likes.isArray && item.likes.includes(currentUser._id)
                ? "card__like-button_type_like"
                : "card__like-button_type_unlike"
              : "card__like-button_type_hidden"
          }
          onClick={(evt) => handleLike(evt)}
        />
      </div>
      <img src={item.imageUrl} alt={item.name} className="card__image" />
    </li>
  );
}

export default ItemCard;
