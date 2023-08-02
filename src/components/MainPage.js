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
      />
      {activeSearch && (
        <NewsCardList
          cards={cards}
          isLoading={isSearchLoading}
          isLoggedIn={isLoggedIn}
        />
      )}
      <Main />
    </>
  );
};

export default MainPage;
