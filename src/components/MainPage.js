import React from "react";
import Header from "./Header";
import Main from "./Main";
import NewsCardList from "./NewsCardList";

const MainPage = ({
  handleSigninClick,
  handleSearchSubmit,
  activeSearch,
  cards,
  isSearchLoading,
  isLoggedIn,
  handleMobileClick,
}) => {
  return (
    <>
      <Header
        onLoginClick={handleSigninClick}
        theme="light"
        handleSearchSubmit={handleSearchSubmit}
        isLoggedIn={isLoggedIn}
        isHomeActive={true}
        handleMobileClick={handleMobileClick}
      />
      {activeSearch && (
        <NewsCardList
          card={cards}
          isLoading={isSearchLoading}
          isLoggedIn={isLoggedIn}
        />
      )}
      <Main />
    </>
  );
};

export default MainPage;
