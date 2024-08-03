import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ClothesSection({ openCard, handleAddClick, clothingItems }) {
  const currentUser = useContext(CurrentUserContext);
  const userClothing = clothingItems.filter((clothingItem) => {
    return clothingItem.owner === currentUser._id;
  });

  return (
    <section className="clothes-section">
      <div className="clothes-section__text-area">
        <p className="clothes-section__text">Your items</p>
        <button
          className="clothes-section__add-button"
          onClick={handleAddClick}
        >
          + Add New
        </button>
      </div>
      <ul className="clothes-section__cards-list">
        {userClothing.map((item) => {
          return <ItemCard key={item._id} item={item} openCard={openCard} />;
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;
