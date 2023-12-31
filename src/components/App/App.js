import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Footer from '../Footer/Footer';
import SigninModal from '../SigninModal/SigninModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import ModalWithSuccess from '../ModalWithSuccess/ModalWithSuccess';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedNews from '../SavedNews/SavedNews';
import MainPage from '../MainPage/MainPage';
import { getNews } from '../../utils/newsApi';
import MobileMenu from '../MobileMenu/MobileMenu';
import ActiveModalContext from '../../contexts/ActiveModalContext';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/auth';
import { addArticle, getArticles, removeArticle } from '../../utils/mainApi';
import SavedCardsContext from '../../contexts/SavedCardsContext';

function App() {
  const [activeModal, setActiveModal] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [token, setToken] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [activeSearch, setActiveSearch] = React.useState(false);
  const [newsCards, setNewsCards] = React.useState([]);
  const [isSearchLoading, setIsSearchLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [keyword, setKeyword] = React.useState('');
  const [savedCards, setSavedCards] = React.useState([]);

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setActiveModal('');
  };

  const handleSignin = (signinData) => {
    auth
      .signIn(signinData)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          auth
            .checkTokenValidity(data.token)
            .then((userData) => {
              setCurrentUser(userData);
            })
            .then(() => {
              setIsLoggedIn(true);
            })
            .then(() => {
              navigate('/saved-articles');
              setActiveModal('successModal');
            })
            .catch((err) => console.log(err));
          getArticles(data.token).then((articlesData) => {
            setSavedCards(articlesData);
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage('Username or password is incorrect');
        setIsLoading(false);
      });
  };

  const handleRegister = (email, password, name) => {
    console.log('signup');
    setIsLoading(true);

    auth
      .signUp(email, password, name)
      .then((res) => {
        console.log(res);
        if (res) {
          setActiveModal('success');
          setIsLoading(false);
        } else {
          console.log('Something went wrong.');
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage('This email is already in use');
        setIsLoading(false);
      });
  };

  const handleSignout = () => {
    setIsLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem('jwt');
    setActiveSearch(false);
    setKeyword('');
    setSavedCards([]);
  };

  const handleSigninClick = () => {
    setActiveModal('signin');
    localStorage.getItem('jwt');
  };

  const handleRegisterClick = () => {
    setActiveModal('signup');
  };

  const handleMobileClick = () => {
    setActiveModal('mobile');
  };

  const handleOutClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      handleCloseModal();
    }
  };

  const checkDuplicate = (card) => {
    if (!savedCards.some((c) => c.link === card.url)) {
      addArticle({ keyword, ...card }, token, currentUser)
        .then((data) => {
          savedCards.push(data);
        })
        .catch((e) => console.log(e));
    }
  };

  const handleDeleteClick = (id, card) => {
    removeArticle(id, token)
      .then(() => {
        savedCards.splice(
          savedCards.findIndex((c) => c.link === card.link || c.link === card.url),
          1
        );
      })
      .catch((e) => console.log(e));
  };
  const checkDelete = (card) => {
    const article = savedCards.find((c) => c.link === card.url);

    if (article !== undefined) {
      handleDeleteClick(article._id, card);
    }
  };

  const handleBook = (card, isBooked) => {
    if (isBooked) {
      checkDelete(card);
    } else {
      checkDuplicate(card);
    }
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
      if (evt.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', closeWithEsc);

    return () => {
      window.removeEventListener('keydown', closeWithEsc);
    };
  }, []);

  React.useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');

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
        .then(() => {
          getArticles(jwt).then((data) => {
            setSavedCards(data);
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ActiveModalContext.Provider value={activeModal}>
        <SavedCardsContext.Provider value={savedCards}>
          <div className="page">
            <div className="page__wrapper">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <MainPage
                      handleSigninClick={handleSigninClick}
                      handleSearchSubmit={handleSearchSubmit}
                      activeSearch={activeSearch}
                      cards={newsCards}
                      isSearchLoading={isSearchLoading}
                      isLoggedIn={isLoggedIn}
                      handleMobileClick={handleMobileClick}
                      handleSignout={handleSignout}
                      handleBook={handleBook}
                      setKeyword={setKeyword}
                      handleSignupClick={handleRegisterClick}
                    ></MainPage>
                  }
                />
                <Route
                  path="/saved-articles"
                  element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                      <SavedNews
                        isLoggedIn={isLoggedIn}
                        onSigninClick={handleSigninClick}
                        handleMobileClick={handleMobileClick}
                        handleSignout={handleSignout}
                        handleDeleteClick={handleDeleteClick}
                      />
                    </ProtectedRoute>
                  }
                />
              </Routes>
              <Footer />
              {activeModal === 'signin' && (
                <SigninModal
                  onClose={handleCloseModal}
                  handleOutClick={handleOutClick}
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                  handleSignin={handleSignin}
                  handleRegisterClick={handleRegisterClick}
                />
              )}
              {activeModal === 'signup' && (
                <RegisterModal
                  onClose={handleCloseModal}
                  handleOutClick={handleOutClick}
                  isLoading={isLoading}
                  handleSigninClick={handleSigninClick}
                  handleSignup={handleRegister}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                />
              )}
              {activeModal === 'success' && (
                <ModalWithSuccess
                  closeModal={handleCloseModal}
                  handleOutClick={handleOutClick}
                  handleSigninClick={handleSigninClick}
                />
              )}
              {activeModal === 'mobile' && (
                <MobileMenu
                  closeModal={handleCloseModal}
                  handleOutClick={handleOutClick}
                  handleSigninClick={handleSigninClick}
                  isLoggedIn={isLoggedIn}
                  handleSignout={handleSignout}
                />
              )}
            </div>
          </div>
        </SavedCardsContext.Provider>
      </ActiveModalContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
