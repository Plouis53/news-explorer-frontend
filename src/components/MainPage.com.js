import React from "react";
import Header from "./Header";
import Main from "./Main";
import NewsCardList from "./NewsCardList";

const MainPage = ({
  handleLoginClick,
  handleSearchSubmit,
  activeSearch,
  cards,
  isSearchLoading,
  isLoggedIn,
  handleMobileClick,
  handleLogout,
  handleBook,
  setKeyword,
  handleSignupClick,
}) => {
  return (
    <>
      <Header
        onLoginClick={handleLoginClick}
        theme="light"
        handleSearchSubmit={handleSearchSubmit}
        isLoggedIn={isLoggedIn}
        isHomeActive={true}
        handleMobileClick={handleMobileClick}
        handleLogout={handleLogout}
        setKeyword={setKeyword}
      />
      {activeSearch && (
        <NewsCardList
          cards={cards}
          isLoading={isSearchLoading}
          isLoggedIn={isLoggedIn}
          handleBook={handleBook}
          handleSignupClick={handleSignupClick}
        />
      )}
      <Main />
    </>
  );
};

export default MainPage;
