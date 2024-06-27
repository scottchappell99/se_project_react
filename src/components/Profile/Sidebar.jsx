import "./Sidebar.css";
import avatar from "../../assets/avatar.svg";

function Sidebar() {
  return (
    <section className="sidebar">
      <img src={avatar} alt="Scott Chappell" className="sidebar__avatar" />
      <p className="sidebar__name">Scott Chappell</p>
    </section>
  );
}

export default Sidebar;
