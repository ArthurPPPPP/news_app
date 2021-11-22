import React, { useEffect, useState } from "react";
import { loadNews } from "../../api/news";

export const News = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(async () => {
    setIsLoading(true);
    try {
      const n = await loadNews();
      setNews(n);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  }, []);

  if (error) {
    console.log("error", error);
  } else if (isLoading) {
    console.log("Loading");
  } else {
    console.log(news);
  }

  return isLoading ? (
    <div>
      <span>Loading...</span>
    </div>
  ) : null;
};
