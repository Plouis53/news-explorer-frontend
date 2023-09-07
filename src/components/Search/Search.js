import React from 'react';
import SearchForm from '../SearchForm/SearchForm';

const Search = ({ handleSearchSubmit, setKeyword }) => {
  return (
    <div className="search-home__content">
      <div className="search-home__text">
        <h1 className="search-home__title">What's going on in the world?</h1>
        <h2 className="search-home__info">
          Find the latest news on any topic and save them in your personal account.
        </h2>
        <SearchForm handleSearchSubmit={handleSearchSubmit} setKeyword={setKeyword} />
      </div>
    </div>
  );
};

export default Search;
