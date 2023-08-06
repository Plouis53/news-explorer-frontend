import React from "react";
import { NavLink } from "react-router-dom";

const NewsCard = ({
  card,
  isLoggedIn,
  isSaved,
  handleBook,
  handleDeleteClick,
}) => {
  const [isShown, setIsShown] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const [hasImage, setHasImage] = React.useState(true);
  const [isVisible, setIsVisible] = React.useState(true);

  const onEnter = () => {
    setIsShown(true);
  };

  const onLeave = () => {
    setIsShown(false);
  };

  const onBookClick = () => {
    setIsClicked(true);
    handleBook(card);
  };

  const handleDelete = () => {
    handleDeleteClick(card._id);
    setIsVisible(false);
  };

  React.useEffect(() => {
    if (card.urlToImage === true || card.image === true) {
      setHasImage(true);
    } else {
      setHasImage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isVisible ? (
        <div className="card">
          <div className="card__container">
            <NavLink
              to={card.url ? card.url : card.link}
              className="card__link"
              target="_blank"
            >
              {hasImage ? (
                <h3 className="card__placeholder">Image could not be found</h3>
              ) : (
                <img
                  src={card.urlToImage ? card.urlToImage : card.image}
                  alt={`${card.title}`}
                  className="card__image"
                />
              )}
            </NavLink>
            {isLoggedIn ? null : (
              <p
                className={
                  isShown ? "card__modal-active" : "card__modal-inactive "
                }
              >
                Sign in to save articles
              </p>
            )}
            {isSaved ? (
              <>
                <p className="card__keyword">{card.keyword}</p>
                <p
                  className={
                    isShown ? "card__modal-active" : "card__modal-inactive "
                  }
                >
                  Remove from saved
                </p>
                <button
                  className="card__delete"
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave}
                  onClick={handleDelete}
                />
              </>
            ) : (
              <button
                className={`card__book  ${
                  isClicked ? "card__book-clicked" : null
                }`}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                onClick={isLoggedIn ? (isClicked ? null : onBookClick) : null}
              />
            )}
          </div>
          <p className="card__date">
            {(card.publishedAt ? card.publishedAt : card.date).slice(0, 10)}
          </p>
          <h3 className="card__title">{card.title}</h3>
          <p className="card__description">
            {card.description ? card.description : card.text}
          </p>
          <h4 className="card__publisher">
            {card.source.name ? card.source.name : card.source}
          </h4>
        </div>
      ) : null}
    </>
  );
};
export default NewsCard;
