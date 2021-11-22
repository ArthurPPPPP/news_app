import React, { useEffect, useState } from "react";
import { loadNews } from "../../api/news";

const News = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [News, setNews] = useState([]);
  useEffect(() => {
    loadNews().then(
      (res) => {
        setIsLoaded(true);
        setNews(res);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);
  if (error) {
    console.log("error");
  } else if (!isLoaded) {
    console.log("Loading");
  } else {
    console.log(News);
  }

  return <div></div>;
};
export default News;

/*/
for git
/*/
