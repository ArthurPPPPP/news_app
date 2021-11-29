import React from "react";
import { NewsListItem } from "../NewsListItem";
import "./styles.scss";

export const NewsList = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((n, i) => (
        <NewsListItem item={n} key={n.id} index={i} />
      ))}
    </ul>
  );
};
