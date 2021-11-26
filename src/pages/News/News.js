import React, { useEffect, useState } from "react";
import { loadNews } from "../../api/news";
import { Loader } from "../../components/Loader";
import { NewsList } from "../../components/NewsList";

export const News = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);

  const getNews = async () => {
    setIsLoading(true);
    try {
      const n = await loadNews();
      setNews(n);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="news-container">
      {isLoading ? <Loader /> : <NewsList news={news} />}
    </div>
  );
};
/*/
bodyText
byline
firstPublicationDate
headline
thumbnail
pillarName
/*/
