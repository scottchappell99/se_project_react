import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function ClothesSection({ openCard, handleAddClick }) {
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
        {defaultClothingItems.map((item) => {
          return <ItemCard key={item._id} item={item} openCard={openCard} />;
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;
