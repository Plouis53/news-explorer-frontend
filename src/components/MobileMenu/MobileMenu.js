import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import closeIcon from '../../images/close.svg';
import logout from '../../images/logoutWhite.svg';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const MobileMenu = ({
  closeModal,
  // handleClick,
  handleOutClick,
  handleSigninClick,
  // handleRegister,
  isLoggedIn,
  handleSignout
}) => {
  const [loggedIn, setLoggedIn] = React.useState('');
  const currentUser = useContext(CurrentUserContext);

  const userData = currentUser.data ? currentUser.data : { name: '' };

  const handleSignoutClick = () => {
    handleSignout();
    closeModal();
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      setLoggedIn('loggedin');
    } else {
      setLoggedIn('loggedout');
    }
  }, []);
  return (
    <div className="menu" onClick={handleOutClick}>
      <div className={`menu__container-${loggedIn}`}>
        <div className="menu__container">
          <div className="menu__over">
            <NavLink to="/" className="menu__logo menu__link" onClick={closeModal}>
              News Explorer
            </NavLink>
            <button type="button" className="menu__button" aria-label="Close">
              <img
                className="menu__close"
                alt="Close button"
                src={closeIcon}
                onClick={closeModal}
              />
            </button>
          </div>
          <NavLink to="/" className="menu__home menu__link" onClick={closeModal}>
            Home
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink
                to="/saved-articles"
                className="menu__articles menu__link"
                onClick={closeModal}
              >
                Saved articles
              </NavLink>
              <button className="menu__logout-button" onClick={handleSignoutClick}>
                {userData.name}
                <img src={logout} alt="Logout Button" className="menu__logout-image" />
              </button>
            </>
          ) : (
            <button className={`menu__signin`} onClick={handleSigninClick}>
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
