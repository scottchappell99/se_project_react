import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants.js";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext.js";
import { getItems, addItem, deleteItem } from "../../utils/api.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: "999",
    city: "",
  });
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!activeModal) return;
    const handleEscPress = (evt) => {
      evt.key === "Escape" && closeActiveModal();
    };
    window.addEventListener("keydown", handleEscPress);
    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, [activeModal]);

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleOutsideClick = (evt) => {
    evt.target.id === activeModal && closeActiveModal();
  };

  const handleCardClick = (card) => {
    setActiveModal("preview-garment");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    currentTempUnit === "F" ? setCurrentTempUnit("C") : setCurrentTempUnit("F");
  };

  const handleDeleteClick = (card) => {
    setActiveModal("delete-garment");
    setSelectedCard(card);
  };

  const handleAddItemSubmit = (values, resetForm) => {
    setIsLoading(true);
    addItem(values)
      .then((data) => {
        values._id = data._id;
      })
      .then(() => setClothingItems([values, ...clothingItems]))
      .then(closeActiveModal)
      .then(
        resetForm({
          name: "",
          imageUrl: "",
          weather: values.weather,
        })
      )
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleDeleteConfirm = (card) => {
    setIsLoading(true);
    deleteItem(card)
      .then(() =>
        setClothingItems(clothingItems.filter((item) => item._id !== card._id))
      )
      .then(closeActiveModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleToggleSwitchChange }}
      >
        <div className="app__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  openCard={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  openCard={handleCardClick}
                  handleAddClick={handleAddClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
          handleOutsideClick={handleOutsideClick}
          onAddItem={handleAddItemSubmit}
          isOpen={activeModal === "add-garment"}
          isLoading={isLoading}
        />
        <ItemModal
          activeModal={activeModal}
          selectedCard={selectedCard}
          handleClose={closeActiveModal}
          handleOutsideClick={handleOutsideClick}
          isOpen={activeModal === "preview-garment"}
          handleDeleteClick={handleDeleteClick}
        />
        <DeleteConfirmModal
          activeModal={activeModal}
          selectedCard={selectedCard}
          handleClose={closeActiveModal}
          handleOutsideClick={handleOutsideClick}
          isOpen={activeModal === "delete-garment"}
          handleDeleteConfirm={handleDeleteConfirm}
          isLoading={isLoading}
        />
      </CurrentTempUnitContext.Provider>
    </div>
  );
}

export default App;
