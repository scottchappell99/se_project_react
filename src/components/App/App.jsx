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
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { getItems, addItem, deleteItem } from "../../utils/api.js";
import { registerUser, logInUser, getUserInfo } from "../../utils/auth.js";
import { setToken, getToken } from "../../utils/token.js";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

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

  const handleRegistrationClick = () => {
    setActiveModal("register-user");
  };

  const handleLogInClick = () => {
    setActiveModal("login-user");
  };

  const handleAddItemSubmit = (values, resetForm) => {
    const jwt = getToken();
    setIsLoading(true);
    addItem(values, jwt)
      .then((data) => {
        values._id = data._id;
        values.owner = data.owner;
      })
      .then(() => setClothingItems([values, ...clothingItems]))
      .then(closeActiveModal)
      .then(resetForm)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleDeleteConfirm = (card) => {
    const jwt = getToken();
    setIsLoading(true);
    deleteItem(card, jwt)
      .then(() =>
        setClothingItems(clothingItems.filter((item) => item._id !== card._id))
      )
      .then(closeActiveModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleRegistration = (values, resetForm) => {
    setIsLoading(true);
    registerUser(values)
      .then((data) => {
        values._id = data._id;
        setCurrentUser(values);
        setIsLoggedIn(true);
      })
      .then(closeActiveModal)
      .then(resetForm)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleLogIn = (values, resetForm) => {
    setIsLoading(true);
    logInUser(values)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          getUserInfo(data.token).then((user) => {
            setCurrentUser(user);
            setIsLoggedIn(true);
          });
        }
      })
      .then(closeActiveModal)
      .then(resetForm)
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

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }

    getUserInfo(jwt)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <CurrentTempUnitContext.Provider
          value={{ currentTempUnit, handleToggleSwitchChange }}
        >
          <div className="app__content">
            <Header
              handleAddClick={handleAddClick}
              handleRegistrationClick={handleRegistrationClick}
              handleLogInClick={handleLogInClick}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
            />
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
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      openCard={handleCardClick}
                      handleAddClick={handleAddClick}
                      clothingItems={clothingItems}
                    />
                  </ProtectedRoute>
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
          <RegisterModal
            activeModal={activeModal}
            handleClose={closeActiveModal}
            handleOutsideClick={handleOutsideClick}
            onRegister={handleRegistration}
            isOpen={activeModal === "register-user"}
            isLoading={isLoading}
          />
          <LoginModal
            activeModal={activeModal}
            handleClose={closeActiveModal}
            handleOutsideClick={handleOutsideClick}
            onLogIn={handleLogIn}
            isOpen={activeModal === "login-user"}
            isLoading={isLoading}
          />
        </CurrentTempUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
