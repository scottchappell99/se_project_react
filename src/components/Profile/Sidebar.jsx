import "./Sidebar.css";
import avatar from "../../assets/avatar.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Sidebar({ handleEditProfileClick }) {
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
      <button onClick={handleEditProfileClick} className="sidebar__change">
        Change profile data
      </button>
      <button className="sidebar__logout">Log out</button>
    </section>
  );
}

export default Sidebar;
