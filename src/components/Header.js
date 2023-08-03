import React from "react";
import Navigation from "./Navigation";
import Search from "./Search";

const Header = ({
  onLoginClick,
  theme,
  handleSearchSubmit,
  isLoggedIn,
  isHomeActive,
  handleMobileClick,
}) => {
  return (
    <header className="header">
      <Navigation
        onLoginClick={onLoginClick}
        theme={theme}
        isLoggedIn={isLoggedIn}
        isHomeActive={isHomeActive}
        handleMobileClick={handleMobileClick}
      />
      <Search handleSearchSubmit={handleSearchSubmit} />
    </header>
  );
};

export default Header;
