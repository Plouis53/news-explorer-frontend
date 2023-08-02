import React from "react";
import { NavLink } from "react-router-dom";

const NewsCardSaved = ({ card, isLoggedIn }) => {
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
        <NavLink to={card.url}>
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
        <p className="card__keyword">Keyword</p>
        <p className={isShown ? "card__modal-active" : "card__modal-inactive "}>
          Remove from saved
        </p>
        <button
          className="card__delete"
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

export default NewsCardSaved;
