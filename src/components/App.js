import React from "react";
import Footer from "./Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ModalWithSuccess from "./ModalWithSuccess";
import ProtectedRoute from "./ProtectedRoute";
import SavedNews from "./SavedNews";
import MainPage from "./MainPage";
import { getNews } from "../utils/newsApi";
import MobileMenu from "./MobileMenu";
import ActiveModalContext from "../contexts/ActiveModalContext";
import CurrentUserContext from "../contexts/CurrentUserContext";
import * as auth from "../utils/auth";
import { addArticle, removeArticle } from "../utils/mainApi";

function App() {
  const [activeModal, setActiveModal] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [token, setToken] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [activeSearch, setActiveSearch] = React.useState(false);
  const [newsCards, setNewsCards] = React.useState([]);
  const [isSearchLoading, setIsSearchLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [keyword, setKeyword] = React.useState("");

  const navigate = useNavigate();

  const handleSignin = (email, password) => {
    auth
      .signIn(email, password)
      .then((data) => {
        if (data.token) {
          auth
            .checkTokenValidity(data.token)
            .then((res) => {
              return res;
            })
            .then((data) => {
              setCurrentUser(data);
            })
            .then(() => {
              setIsLoggedIn(true);
            })
            .then(() => {
              navigate("/saved-articles");
            })
            .catch((err) => console.log(err));
        }
      })
      .then(() => {
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Username or password is incorrect");
        setIsLoading(false);
      });
  };

  const handleRegister = (email, password, name) => {
    console.log("signup");
    setIsLoading(true);

    auth
      .signUp(email, password, name)
      .then((res) => {
        console.log(res);
        if (res) {
          setActiveModal("success");
          setIsLoading(false); // Move the setIsLoading here, so it won't be set twice
        } else {
          console.log("Something went wrong.");
          setIsLoading(false); // Also set setIsLoading here in the error case
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("This email is already in use");
        setIsLoading(false);
      });
  };

  const handleSignout = () => {
    setIsLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem("jwt");
  };

  const handleSigninClick = () => {
    setActiveModal("login");
  };

  // const handleSignupSuccess = () => {
  //   setActiveModal("login");
  // };

  const handleSignupClick = () => {
    setActiveModal("signup");
  };

  const handleMobileClick = () => {
    setActiveModal("mobile");
  };

  const handleOutClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      handleCloseModal();
    }
  };

  // const handleCreateModal = () => {
  //   setActiveModal("create");
  // };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleBook = (card) => {
    addArticle({ keyword: keyword, ...card }, token, currentUser).catch((e) =>
      console.log(e)
    );
  };

  const handleDeleteClick = (id) => {
    removeArticle(id, token).catch((e) => console.log(e));
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
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", closeWithEsc);

    return () => {
      window.removeEventListener("keydown", closeWithEsc);
    };
  }, []);

  React.useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      setToken(jwt);

      auth
        .checkTokenValidity(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
          }
          return res;
        })
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ActiveModalContext.Provider value={activeModal}>
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
                handleSignout={handleSignout}
                handleBook={handleBook}
                setKeyword={setKeyword}
                handleSignupClick={handleSignupClick}
              />
            }
          />
          <Route
            path="/saved-articles"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedNews
                  isLoggedIn={isLoggedIn}
                  // handleSigninClick={handleSigninClick} //review this later
                  handleMobileClick={handleMobileClick}
                  handleSignout={handleSignout}
                  token={token}
                  handleDeleteClick={handleDeleteClick}
                />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
        <Footer />
        {activeModal === "login" && (
          <LoginModal
            closeModal={handleCloseModal}
            handleOutClick={handleOutClick}
            handleSignupClick={handleSignupClick}
            isLoading={isLoading}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            handleSignin={handleSignin}
          />
        )}
        {activeModal === "signup" && (
          <RegisterModal
            closeModal={handleCloseModal}
            handleOutClick={handleOutClick}
            isLoading={isLoading}
            handleSigninClick={handleSigninClick}
            handleSignup={handleRegister}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        )}
        {activeModal === "success" && (
          <ModalWithSuccess
            closeModal={handleCloseModal}
            handleOutClick={handleOutClick}
            handleSigninClick={handleSigninClick}
            // handleSignupSuccess={handleSignupSuccess}
          />
        )}
        {activeModal === "mobile" && (
          <MobileMenu
            closeModal={handleCloseModal}
            handleOutClick={handleOutClick}
            handleSigninClick={handleSigninClick}
            isLoggedIn={isLoggedIn}
          />
        )}
      </ActiveModalContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
