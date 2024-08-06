import "./Sidebar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Sidebar({ onEditProfileClick, onLogOutClick }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="sidebar">
      <div className="sidebar__header">
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="sidebar__avatar"
        />
        <p className="sidebar__name">{currentUser.name}</p>
      </div>
      <button onClick={onEditProfileClick} className="sidebar__change">
        Change profile data
      </button>
      <button onClick={onLogOutClick} className="sidebar__logout">
        Log out
      </button>
    </section>
  );
}

export default Sidebar;
