import "./Profile.css";
import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

function Profile({ openCard, handleAddClick, clothingItems }) {
  return (
    <div className="profile">
      <Sidebar />
      <ClothesSection
        openCard={openCard}
        handleAddClick={handleAddClick}
        clothingItems={clothingItems}
      />
    </div>
  );
}

export default Profile;
