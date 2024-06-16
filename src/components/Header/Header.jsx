import "./Header.css";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header() {
  return (
    <header className="header">
      <img
        src="../src/assets/wtwr-logo.svg"
        alt="WTWR Logo with a degree sign to the top right"
        className="header__logo"
      />
      <p className="header__date">{currentDate}, New York</p>
      <button className="header__add-button" type="button">
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
