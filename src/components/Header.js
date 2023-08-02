import React from "react";
import NavigationBar from "../blocks/navigationbar";
import SearchForm from "../blocks/searchform.css";

const Header = ({
  onLoginClick,
  theme,
  handleSearchSubmit,
  isLoggedIn,
  isHomeActive,
  handleMobileClick,
  handleLogout,
  setKeyword,
}) => {
  return (
    <header className="header">
      <NavigationBar
        onLoginClick={onLoginClick}
        theme={theme}
        isLoggedIn={isLoggedIn}
        isHomeActive={isHomeActive}
        handleMobileClick={handleMobileClick}
        handleLogout={handleLogout}
      />
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        setKeyword={setKeyword}
      />
    </header>
  );
};

export default Header;
