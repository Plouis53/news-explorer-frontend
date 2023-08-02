import React from "react";
import NewsCard from "./NewsCard";
import Preloader from "./Preloader";

const NewsCardList = ({ cards, isLoading, isLoggedIn }) => {
  const [amountShown, setAmountShown] = React.useState(3);
  const [isLarge, setIsLarge] = React.useState(false);

  const showMore = () => {
    setAmountShown(amountShown + 3);
    checkIsLarge();
  };

  const checkIsLarge = () => {
    if (amountShown >= 99) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
    }
  };

  return (
    <section className="news">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <h2 className="news__header">Search Results</h2>
          <ul className="news__cards">
            {cards.slice(0, amountShown).map((card) => (
              <NewsCard
                card={card}
                key={Math.random()}
                isLoggedIn={isLoggedIn}
              />
            ))}
          </ul>
          {isLarge ? null : (
            <button className="news__show" onClick={showMore}>
              Show more
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default NewsCardList;
