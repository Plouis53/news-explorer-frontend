import React from "react";
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";

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
      <SearchForm handleSearchSubmit={handleSearchSubmit} />
    </header>
  );
};

export default Header;
