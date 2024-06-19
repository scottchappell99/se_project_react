import "./ItemCard.css";

function ItemCard({ item, openCard }) {
  return (
    <div
      className="card"
      onClick={() => {
        openCard(item);
      }}
    >
      <h2 className="card__name">{item.name}</h2>
      <img src={item.link} alt={item.name} className="card__image" />
    </div>
  );
}

export default ItemCard;
