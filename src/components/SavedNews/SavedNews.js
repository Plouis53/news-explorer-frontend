import React, { useContext } from 'react';
import Navigation from '../Navigation/Navigation';
import NewsCardListSaved from '../NewsCardListSaved/NewsCardListSaved';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import SavedCardsContext from '../../contexts/SavedCardsContext';

const SavedNews = ({
  onSigninClick,
  isLoggedIn,
  handleMobileClick,
  handleSignout,
  handleDeleteClick
}) => {
  const currentUser = useContext(CurrentUserContext);
  const savedCards = useContext(SavedCardsContext);
  const [newsCards, setNewsCards] = React.useState([]);
  const [keywords, setKeywords] = React.useState([]);
  const [keywordsAmount, setKeywordsAmount] = React.useState(1);

  const keywordArray = [];
  const keywordSortableArray = [];
  let keywordSortedArray = [];
  const userData = currentUser.data ? currentUser.data : { name: '' };

  const countAmount = (arr) => {
    let mp = new Map();

    for (let i = 0; i < arr.length; ++i) {
      if (mp.has(arr[i])) {
        mp.set(arr[i], mp.get(arr[i]) + 1);
      } else {
        mp.set(arr[i], 1);
      }
    }

    let keys = [];

    mp.forEach((_value, key) => {
      keys.push(key);
    });
    keys.sort((a, b) => a - b);

    keys.forEach((key) => {
      keywordSortableArray.unshift([key, mp.get(key)]);
    });

    keywordSortedArray = keywordSortableArray.sort((a, b) => {
      return a[1] - b[1];
    });

    if (keywordSortedArray.length >= 3) {
      setKeywords([keywordSortedArray[0][0], keywordSortedArray[1][0], keywordSortedArray[2][0]]);
      setKeywordsAmount(keywordSortedArray.length);
    } else if (keywordSortedArray.length === 2) {
      setKeywords([keywordSortedArray[0][0], keywordSortedArray[1][0]]);
    } else if (keywordSortedArray.length === 1) {
      setKeywords([keywordSortedArray[0][0]]);
    }
  };

  React.useEffect(() => {
    newsCards.map((card) => keywordArray.unshift(card.keyword));

    countAmount(keywordArray);
  }, [newsCards]);

  React.useEffect(() => {
    setNewsCards([...new Map(savedCards.map((v) => [v.title, v])).values()]);
  }, [savedCards]);

  return (
    <>
      <Navigation
        onSigninClick={onSigninClick}
        theme="dark"
        isHomeActive={false}
        isLoggedIn={isLoggedIn}
        handleMobileClick={handleMobileClick}
        handleSignout={handleSignout}
      />
      <main className="saved">
        {' '}
        {newsCards.length === 0 ? (
          <h2 className="saved__header">Save some cards to see them here!</h2>
        ) : (
          <>
            <section className="saved__container">
              <p className="saved__title">Saved Articles</p>
              <h2 className="saved__header">{`${userData.name} you have ${
                newsCards.length
              } saved article${newsCards.length === 1 ? '' : 's'}`}</h2>
              <p className="saved__words">
                By keywords:{' '}
                <span className="saved__bold">
                  {keywords.length === 3
                    ? `${keywords[0]}, ${keywords[1]}, and ${
                        keywordsAmount > 3 ? keywordsAmount - 2 + ' more' : keywords[2]
                      }`
                    : keywords.length === 2
                    ? `${keywords[0]} and ${keywords[1]}`
                    : keywords.length === 1
                    ? `${keywords[0]}`
                    : null}{' '}
                </span>
              </p>
            </section>
            <NewsCardListSaved
              isLoggedIn={isLoggedIn}
              newsCards={newsCards}
              handleDeleteClick={handleDeleteClick}
              setNewsCards={setNewsCards}
            />
          </>
        )}
      </main>
    </>
  );
};

export default SavedNews;
