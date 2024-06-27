import "./Profile.css";
import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

function Profile({ weatherData, openCard }) {
  return (
    <div className="profile">
      <Sidebar />
      <ClothesSection weatherData={weatherData} openCard={openCard} />
    </div>
  );
}

export default Profile;
