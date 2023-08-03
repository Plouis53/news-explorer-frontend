import React from "react";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ModalWithSuccess from "./ModalWithSuccess";
import ProtectedRoute from "./ProtectedRoute";
import SavedNews from "./SavedNews";
import MainPage from "./MainPage";
import { getNews } from "../utils/newsApi";
import MobileMenu from "./MobileMenu";

function App() {
  const [activeModal, setActiveModal] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [token, setToken] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [activeSearch, setActiveSearch] = React.useState(false);
  const [newsCards, setNewsCards] = React.useState([]);
  const [isSearchLoading, setIsSearchLoading] = React.useState(true);

  const handleSigninClick = () => {
    setActiveModal("login");
  };

  const handleSignupClick = () => {
    setActiveModal("signup");
  };

  const handleMobileClick = () => {
    setActiveModal("mobile");
  };

  const handleOutClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeModal();
    }
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const handleSearchSubmit = (input) => {
    setActiveSearch(true);
    setIsSearchLoading(true);

    getNews(input)
      .then((data) => {
        setNewsCards(data.articles);
      })
      .then(() => {
        setIsSearchLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    const closeWithEsc = (evt) => {
      if (evt.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", closeWithEsc);

    return () => {
      window.removeEventListener("keydown", closeWithEsc);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainPage
              handleSearchSubmit={handleSearchSubmit}
              handleSigninClick={handleSigninClick}
              activeSearch={activeSearch}
              cards={newsCards}
              isSearchLoading={isSearchLoading}
              isLoggedIn={isLoggedIn}
              handleMobileClick={handleMobileClick}
            />
          }
        />
        <Route
          path="/saved-articles"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedNews
                isLoggedIn={isLoggedIn}
                handleSigninClick={handleSigninClick}
                handleMobileClick={handleMobileClick}
              />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
      <Footer />
      {activeModal === "login" && (
        <LoginModal
          closeModal={closeModal}
          handleOutClick={handleOutClick}
          handleSignupClick={handleSignupClick}
          isLoading={isLoading}
        />
      )}
      {activeModal === "signup" && (
        <RegisterModal
          closeModal={closeModal}
          handleOutClick={handleOutClick}
          isLoading={isLoading}
          handleSigninClick={handleSigninClick}
        />
      )}
      {activeModal === "success" && (
        <ModalWithSuccess
          closeModal={closeModal}
          handleOutClick={handleOutClick}
        />
      )}
      {activeModal === "mobile" && (
        <MobileMenu
          closeModal={closeModal}
          handleOutClick={handleOutClick}
          handleSigninClick={handleSigninClick}
          isLoggedIn={isLoggedIn}
        />
      )}
    </>
  );
}

export default App;
