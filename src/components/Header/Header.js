import React from 'react';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';

const Header = ({
  onSigninClick,
  theme,
  handleSearchSubmit,
  isLoggedIn,
  isHomeActive,
  handleMobileClick,
  handleSignout,
  setKeyword
}) => {
  const headerModifiers = {
    theme: `theme-${theme}`,
    'home-active': isHomeActive ? 'home-active' : ''
  };
  const headerClasses = Object.keys(headerModifiers)
    .map((modifier) => headerModifiers[modifier])
    .join(' ');

  return (
    <header className={`header ${headerClasses}`}>
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
