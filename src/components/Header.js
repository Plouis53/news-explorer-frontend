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
  handleSignout,
  setKeyword,
}) => {
  return (
    <header className="header">
      <Navigation
        onLoginClick={onLoginClick}
        theme={theme}
        isLoggedIn={isLoggedIn}
        isHomeActive={isHomeActive}
        handleMobileClick={handleMobileClick}
        handleSignout={handleSignout}
      />
      <Search handleSearchSubmit={handleSearchSubmit} setKeyword={setKeyword} />
    </header>
  );
};

export default Header;
