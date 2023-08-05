import React from "react";
import NewsCard from "./NewsCard";
import { getTempArticles } from "../utils/newsApi";

const NewsCardListSaved = ({ isLoggedIn }) => {
  const [newsCards, setNewsCards] = React.useState([]);

  React.useEffect(() => {
    getTempArticles("Hello")
      .then((data) => {
        setNewsCards(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="news-saved">
      <ul className="news__cards">
        {newsCards.slice(0, 5).map((card) => (
          <NewsCard
            card={card}
            key={Math.random()}
            isLoggedIn={isLoggedIn}
            isSaved={true}
          />
        ))}
      </ul>
    </section>
  );
};

export default NewsCardListSaved;
