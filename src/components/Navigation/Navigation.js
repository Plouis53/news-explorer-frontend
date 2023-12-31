import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logout from '../../images/logout.svg';
import logoutWhite from '../../images/logoutWhite.svg';
import ActiveModalContext from '../../contexts/ActiveModalContext';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const Navigation = ({
  onSigninClick,
  theme,
  isHomeActive,
  isLoggedIn,
  handleMobileClick,
  handleSignout
}) => {
  const [homeClass, setHomeClass] = React.useState('');
  const [articleClass, setArticleClass] = React.useState('');
  const [color, setColor] = React.useState('');

  const activeModal = useContext(ActiveModalContext);
  const currentUser = useContext(CurrentUserContext);

  const userData = currentUser.data ? currentUser.data : { name: '' };

  React.useEffect(() => {
    if (isHomeActive) {
      setHomeClass('active');
      setArticleClass('inactive');
      setColor(logoutWhite);
    } else {
      setHomeClass('inactive');
      setArticleClass('active');
      setColor(logout);
    }
  }, []);

  return (
    <nav className={`nav nav_theme_${theme}`}>
      <NavLink to="/" className="nav__logo nav__link-active">
        News Explorer
      </NavLink>
      {activeModal === 'signup' || activeModal === 'signin' ? null : (
        <button className={`nav__mobile nav__mobile_theme_${theme}`} onClick={handleMobileClick} />
      )}
      <nav className="nav__right">
        <NavLink
          to="/"
          className={`nav__home nav__link nav__highlight-${homeClass}_${theme} nav__link-active`}>
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink
              to="/saved-articles"
              className={`nav__articles nav__link nav__highlight-${articleClass}_${theme} nav__link-${articleClass}`}>
              Saved articles
            </NavLink>
            <button className={`nav__signout-button nav__button_${theme}`} onClick={handleSignout}>
              {userData.name}
              <img src={color} alt="Signout Button" className="nav__signout-image" />
            </button>
          </>
        ) : (
          <button
            className={`nav__signin nav__button_${theme} nav__button`}
            onClick={onSigninClick}>
            Sign in
          </button>
        )}
      </nav>
    </nav>
  );
};

export default Navigation;
