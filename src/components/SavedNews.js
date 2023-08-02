import React from "react";
import Navigation from "./Navigation";
import NewsCardListSaved from "./NewCardListSaved";

const SavedNews = ({ onLoginClick, isLoggedIn, handleMobileClick }) => {
  return (
    <>
      <Navigation
        onLoginClick={onLoginClick}
        theme="dark"
        isHomeActive={false}
        isLoggedIn={isLoggedIn}
        handleMobileClick={handleMobileClick}
      />
      <section className="saved">
        <div className="saved__container">
          <p className="saved__title">Saved Articles</p>
          <h2 className="saved__header">Username, you have X saved articles</h2>
          <p className="saved__words">
            By keywords: <span className="saved__bold">x, y, and Z others</span>
          </p>
        </div>
        <NewsCardListSaved isLoggedIn={isLoggedIn} />
      </section>
    </>
  );
};

export default SavedNews;
