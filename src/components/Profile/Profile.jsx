import "./Profile.css";
import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

function Profile({
  openCard,
  handleAddClick,
  handleEditProfileClick,
  clothingItems,
}) {
  return (
    <div className="profile">
      <Sidebar handleEditProfileClick={handleEditProfileClick} />
      <ClothesSection
        openCard={openCard}
        handleAddClick={handleAddClick}
        clothingItems={clothingItems}
      />
    </div>
  );
}

export default Profile;
