import React from "react";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";

const Header = ({
  onSigninClick,
  theme,
  handleSearchSubmit,
  isLoggedIn,
  isHomeActive,
  handleMobileClick,
  handleSignout,
  setKeyword,
}) => {
  const headerModifiers = {
    theme,
    "home-active": isHomeActive,
  };
  return (
    <header className="header" data-modifiers={headerModifiers}>
      <Navigation
        onSigninClick={onSigninClick}
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
