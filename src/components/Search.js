import React from "react";
import SearchForm from "./SearchForm";

const Search = ({ handleSearchSubmit }) => {
  return (
    <section className="search">
      <h1 className="search__title">What's going on in the world?</h1>
      <p className="search__info">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm handleSearchSubmit={handleSearchSubmit} />
    </section>
  );
};

export default Search;
