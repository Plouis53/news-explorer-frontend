import React from "react";
import { NavLink } from "react-router-dom";
import closeIcon from "../images/close.svg";
import logout from "../images/logoutWhite.svg";

const MobileMenu = ({
  closeModal,
  handleClick,
  handleOutClick,
  handleLoginClick,
  handleRegister,
  isLoggedIn,
}) => {
  return (
    <div className="menu" onClick={handleOutClick}>
      <div className="menu__container">
        <div className="menu__over">
          <NavLink
            to="/"
            className="menu__logo menu__link"
            onClick={closeModal}
          >
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
            <button className="menu__logout-button" onClick={closeModal}>
              Username
              <img
                src={logout}
                alt="Logout Button"
                className="menu__logout-image"
              />
            </button>
          </>
        ) : (
          <button className={`menu__signin`} onClick={handleLoginClick}>
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;