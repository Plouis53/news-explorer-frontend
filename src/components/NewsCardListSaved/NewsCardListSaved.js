import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardListSaved = ({ isLoggedIn, newsCards, handleDeleteClick, setNewsCards }) => {
  return (
    <section className="news">
      <ul className="news__cards">
        {newsCards.map((card) => (
          <NewsCard
            card={card}
            key={Math.random()}
            isLoggedIn={isLoggedIn}
            isSaved={true}
            handleDeleteClick={handleDeleteClick}
            setNewsCards={setNewsCards}
            newsCards={newsCards}
            handleBook={undefined}
            handleSignupClick={undefined}
          />
        ))}
      </ul>
    </section>
  );
};
export default NewsCardListSaved;
