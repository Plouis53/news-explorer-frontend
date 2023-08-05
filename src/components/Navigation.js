import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logout from "../images/logout.svg";
import logoutWhite from "../images/logoutWhite.svg";
import ActiveModalContext from "../contexts/ActiveModalContext";

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

  const activeModal = useContext(ActiveModalContext);

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
    <div className={`nav nav_${theme}`}>
      <NavLink to="/" className="nav__logo nav__link-active">
        News Explorer
      </NavLink>
      {activeModal === "signup" || activeModal === "login" ? null : (
        <button
          className={`nav__mobile nav__mobile_${theme}`}
          onClick={handleMobileClick}
        />
      )}
      <div className="nav__right">
        <NavLink
          to="/"
          className={`nav__home nav__link nav__highlight-${homeClass}_${theme} nav__link-active`}
        >
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink
              to="/saved-articles"
              className={`nav__articles nav__link nav__highlight-${articleClass}_${theme} nav__link-${articleClass}`}
            >
              Saved articles
            </NavLink>
            <button className={`nav__logout-button nav__button_${theme}`}>
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
            className={`nav__signin nav__button_${theme} nav__button`}
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
