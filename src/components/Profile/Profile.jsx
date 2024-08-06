import "./Profile.css";
import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

function Profile({
  openCard,
  onAddClick,
  onEditProfileClick,
  onLogOutClick,
  clothingItems,
}) {
  return (
    <div className="profile">
      <Sidebar
        onEditProfileClick={onEditProfileClick}
        onLogOutClick={onLogOutClick}
      />
      <ClothesSection
        openCard={openCard}
        onAddClick={onAddClick}
        clothingItems={clothingItems}
      />
    </div>
  );
}

export default Profile;
