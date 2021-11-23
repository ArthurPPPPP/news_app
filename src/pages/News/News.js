import React, { useEffect, useState } from "react";
import { loadNews } from "../../api/news";
import { Loader } from "../../components/Loader";

export const News = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const n = await loadNews();
        setNews(n);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
      if (error) {
        console.log("error", error);
      } else if (isLoading) {
        console.log("Loading");
      } else {
        console.log(news);
      }
    })();
  }, []);

  if (error) {
    console.log("error", error);
  } else if (isLoading) {
    console.log("Loading");
  } else {
    console.log(news);
  }

  return isLoading ? <Loader /> : null;
};
