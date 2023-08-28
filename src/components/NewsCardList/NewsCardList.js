import React, { useContext } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import SavedCardsContext from '../../contexts/SavedCardsContext';

const NewsCardList = ({ cards, isLoading, isLoggedIn, handleBook, handleSignupClick }) => {
  const savedCards = useContext(SavedCardsContext);
  const [amountShown, setAmountShown] = React.useState(3);
  const [isLarge, setIsLarge] = React.useState(false);
  const [isEmpty, setIsEmpty] = React.useState(false);
  const [newsCards, setNewsCards] = React.useState([]);

  const checkIsLarge = () => {
    if (amountShown >= 99) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
    }
  };

  const showMore = () => {
    setAmountShown(amountShown + 3);
    checkIsLarge();
  };

  React.useEffect(() => {
    if (cards.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [cards]);

  React.useEffect(() => {
    setNewsCards(savedCards);
  }, []);

  return (
    <>
      {isLoading && <Preloader />}
      {!isLoading && isEmpty && <NotFound />}
      {!isLoading && !isEmpty && (
        <section className="news">
          <h2 className="news__header">Search Results</h2>
          <ul className="news__cards">
            {cards.slice(0, amountShown).map((card) => (
              <NewsCard
                card={card}
                key={Math.random()}
                isLoggedIn={isLoggedIn}
                isSaved={false}
                handleBook={handleBook}
                handleSignupClick={handleSignupClick}
                newsCards={newsCards}
                p
              />
            ))}
          </ul>
          {!isLarge && (
            <button className="news__show" onClick={showMore}>
              Show more
            </button>
          )}
        </section>
      )}
    </>
  );
};

export default NewsCardList;
