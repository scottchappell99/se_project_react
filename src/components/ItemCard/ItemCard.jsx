import "./ItemCard.css";

function ItemCard({ item, openCard }) {
  return (
    <div
      className="card"
      onClick={() => {
        openCard(item);
      }}
    >
      <div className="card__name-wrapper">
        <h2 className="card__name">{item.name}</h2>
      </div>
      <img src={item.link} alt={item.name} className="card__image" />
    </div>
  );
}

export default ItemCard;
