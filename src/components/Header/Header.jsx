import { useRef, useState } from "react";

import "./Header.css";
import logo from "../../assets/wtwr-logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({ handleAddClick, weatherData }) {
  const [isMobileMenuOpened, toggleMobileMenu] = useState(false);

  const handleHamburgerMenuClick = () => {
    toggleMobileMenu((prev) => !prev);
  };

  const handleHamburgerAddClick = () => {
    handleAddClick();
    handleHamburgerMenuClick();
  };

  return (
    <header className="header">
      <Link to="/se_project_react/">
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
          onClick={handleHamburgerAddClick}
          className="header__add-button"
          type="button"
        >
          + Add clothes
        </button>
        <Link to="/se_project_react/profile/" className="header__profile-link">
          <div className="header__user-container">
            <p className="header__name">Scott Chappell</p>
            <img src={avatar} alt="Scott Chappell" className="header__avatar" />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
