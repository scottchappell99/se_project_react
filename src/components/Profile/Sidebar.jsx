import "./Sidebar.css";
import avatar from "../../assets/avatar.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Sidebar() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="sidebar">
      <img
        src={currentUser.avatar}
        alt={currentUser.name}
        className="sidebar__avatar"
      />
      <p className="sidebar__name">{currentUser.name}</p>
    </section>
  );
}

export default Sidebar;
