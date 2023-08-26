import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NewsCardList from '../NewsCardList/NewsCardList';

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
  handleSignupClick
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
          handleSignupClick={handleSignupClick}
        />
      )}
      <Main />
    </>
  );
};

export default MainPage;
