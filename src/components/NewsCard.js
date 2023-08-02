import React from "react";
import { NavLink } from "react-router-dom";

const NewsCard = ({ card, isLoggedIn }) => {
  const [isShown, setIsShown] = React.useState(false);

  const onEnter = () => {
    setIsShown(true);
  };

  const onLeave = () => {
    setIsShown(false);
  };

  return (
    <div className="card">
      <div className="card__container">
        <NavLink to={card.url} className="card__link">
          {!card.urlToImage ? (
            <h3 className="card__placeholder">Image could not be found</h3>
          ) : (
            <img
              src={card.urlToImage}
              alt={`${card.title}`}
              className="card__image"
            />
          )}
        </NavLink>
        {isLoggedIn ? null : (
          <p
            className={isShown ? "card__modal-active" : "card__modal-inactive "}
          >
            Sign in to save articles
          </p>
        )}
        <button
          className={`card__book ${isLoggedIn ? "card__book-active" : null}`}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        />
      </div>
      <p className="card__date">{card.publishedAt.slice(0, 10)}</p>
      <h3 className="card__title">{card.title}</h3>
      <p className="card__description">{card.description}</p>
      <h4 className="card__publisher">{card.source.name}</h4>
    </div>
  );
};

export default NewsCard;
