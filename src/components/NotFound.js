import React from "react";
import NotFoundImage from "../images/not-found.svg";

const NotFound = () => {
  return (
    <section className="not">
      <img src={NotFoundImage} className="not__image" alt="Sad face" />
      <h3 className="not__title">Nothing Found</h3>
      <p className="not__paragraph">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
};

export default NotFound;
