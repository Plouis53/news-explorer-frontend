import React from "react";
import { NavLink } from "react-router-dom";
import logout from "../images/logout.svg";
import logoutWhite from "../images/logoutWhite.svg";

const Navigation = ({
  onLoginClick,
  theme,
  isHomeActive,
  isLoggedIn,
  handleMobileClick,
}) => {
  const [homeClass, setHomeClass] = React.useState("");
  const [articleClass, setArticleClass] = React.useState("");
  const [color, setColor] = React.useState("");

  React.useEffect(() => {
    if (isHomeActive) {
      setHomeClass("active");
      setArticleClass("inactive");
      setColor(logoutWhite);
    } else {
      setHomeClass("inactive");
      setArticleClass("active");
      setColor(logout);
    }
  }, []);

  return (
    <div className={`nav nav__${theme}`}>
      <NavLink to="/" className="nav__logo nav__link">
        News Explorer
      </NavLink>
      <button
        className={`nav__mobile nav__mobile-${theme}`}
        onClick={handleMobileClick}
      />
      <div className="nav__right">
        <NavLink
          to="/"
          className={`nav__home nav__link nav__highlight-${homeClass}-${theme}`}
        >
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink
              to="/saved-articles"
              className={`nav__articles nav__link nav__highlight-${articleClass}-${theme}`}
            >
              Saved articles
            </NavLink>
            <button className={`nav__logout-button nav__button-${theme}`}>
              Username
              <img
                src={color}
                alt="Logout Button"
                className="nav__logout-image"
              />
            </button>
          </>
        ) : (
          <button
            className={`nav__signin nav__button-${theme} nav__button`}
            onClick={onLoginClick}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
