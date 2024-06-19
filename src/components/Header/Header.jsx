import "./Header.css";
import logo from "../../assets/wtwr-logo.svg";
import avatar from "../../assets/avatar.svg";

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
      <button type="button" className="header__hamburger-menu-button"></button>
      <p className="header__date">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__user-box">
        <button type="button" className="header__close-button"></button>
        <button
          onClick={handleAddClick}
          className="header__add-button"
          type="button"
        >
          + Add clothes
        </button>
        <div className="header__user-container">
          <p className="header__name">Scott Chappell</p>
          <img src={avatar} alt="Scott Chappell" className="header__avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
