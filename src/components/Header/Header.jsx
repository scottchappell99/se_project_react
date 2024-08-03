import { useContext, useState } from "react";

import "./Header.css";
import logo from "../../assets/wtwr-logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleRegistrationClick,
  handleLogInClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [isMobileMenuOpened, toggleMobileMenu] = useState(false);

  const userInitial = currentUser.name?.split("")[0];

  const handleHamburgerMenuClick = () => {
    toggleMobileMenu((prev) => !prev);
  };

  const handleHamburgerAddClick = () => {
    handleAddClick();
    handleHamburgerMenuClick();
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          src={logo}
          alt="WTWR Logo with a degree sign to the top right"
          className="header__logo"
        />
      </Link>
      <button
        onClick={handleHamburgerMenuClick}
        type="button"
        className="header__hamburger-menu-button"
      ></button>
      <p className="header__date">
        {currentDate}, {weatherData.city}
      </p>
      <div
        className={`header__user-box ${
          isMobileMenuOpened ? "header__user-box_open" : ""
        }`}
      >
        <ToggleSwitch />
        <button
          onClick={handleHamburgerMenuClick}
          type="button"
          className="header__close-button"
        ></button>
        <button
          onClick={
            isLoggedIn ? handleHamburgerAddClick : handleRegistrationClick
          }
          className="header__add-button"
          type="button"
        >
          {isLoggedIn ? "+ Add Clothes" : "Sign Up"}
        </button>
        <Link
          to="/profile"
          className={
            isLoggedIn
              ? "header__profile-link"
              : "header__profile-link header__profile-link_hidden"
          }
        >
          <div className="header__user-container">
            <p className="header__name">{currentUser.name}</p>
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className={
                currentUser.avatar === ""
                  ? "header__avatar header__avatar_hidden"
                  : "header__avatar"
              }
            />
            <span
              className={
                currentUser.avatar === ""
                  ? "header__placeholder"
                  : "header__placeholder header__placeholder_hidden"
              }
            >
              {userInitial}
            </span>
          </div>
        </Link>
        <button
          onClick={handleLogInClick}
          className={
            isLoggedIn
              ? "header__add-button header__add-button_hidden"
              : "header__add-button"
          }
        >
          Log In
        </button>
      </div>
    </header>
  );
}

export default Header;
