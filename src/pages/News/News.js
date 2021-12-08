import React, { useEffect, useState } from "react";
import { loadNews } from "../../api/news";
import { Loader } from "../../components/Loader";
import { NewsList } from "../../components/NewsList";

export const News = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [searchValue, setValue] = useState("");

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

  const filteredNews = news.filter((fnews) => {
    return fnews.tags[0].webTitle
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  });
  const resetValue = (e) => {
    e.preventDefault();
    setValue("");
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="news-container">
      <div className="search">
        <form className="searching-form">
          <input
            value={searchValue}
            type="text"
            placeholder="Type something to start search"
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button onClick={resetValue}>
            <span>x</span>
          </button>
        </form>
      </div>
      {isLoading ? <Loader /> : <NewsList news={filteredNews} />}
    </div>
  );
};
