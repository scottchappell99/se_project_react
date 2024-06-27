import "./Profile.css";
import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

function Profile({ openCard, handleAddClick }) {
  return (
    <div className="profile">
      <Sidebar />
      <ClothesSection openCard={openCard} handleAddClick={handleAddClick} />
    </div>
  );
}

export default Profile;
