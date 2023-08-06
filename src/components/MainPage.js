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
  handleSignout,
  handleBook,
  setKeyword,
}) => {
  return (
    <>
      <Header
        onSigninClick={handleSigninClick}
        theme="light"
        handleSearchSubmit={handleSearchSubmit}
        isLoggedIn={isLoggedIn}
        isHomeActive={true}
        handleMobileClick={handleMobileClick}
        handleSignout={handleSignout}
        setKeyword={setKeyword}
      />
      {activeSearch && (
        <NewsCardList
          cards={cards}
          isLoading={isSearchLoading}
          isLoggedIn={isLoggedIn}
          handleBook={handleBook}
        />
      )}
      <Main />
    </>
  );
};

export default MainPage;
