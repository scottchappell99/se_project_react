import "./Header.css";
import logo from "../../assets/wtwr-logo.svg";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({ handleAddClick, weatherData }) {
  return (
    <header className="header">
      <img
        src={logo}
        alt="WTWR Logo with a degree sign to the top right"
        className="header__logo"
      />
      <p className="header__date">
        {currentDate}, {weatherData.city}
      </p>
      <button
        onClick={handleAddClick}
        className="header__add-button"
        type="button"
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__name">Scott Chappell</p>
        <div className="header__avatar"></div>
      </div>
    </header>
  );
}

export default Header;
