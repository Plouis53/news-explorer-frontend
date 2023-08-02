import React from "react";
import { useForm } from "react-hook-form";

const SearchForm = ({ handleSearchSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleSearchSubmit(data.searchs);
  };

  return (
    <form className="search__form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="search__fieldset">
        <div className="search__container">
          <input
            className="search__input"
            type="text"
            placeholder="Enter topic"
            {...register("searchs", {
              required: "Please enter a keyword",
            })}
          />
          {errors.searchs && (
            <span className="search__errors">{errors.searchs.message}</span>
          )}
        </div>
        <button className="search__search">Search</button>
      </fieldset>
      <button className="search__search-mobile">Search</button>
    </form>
  );
};

export default SearchForm;
