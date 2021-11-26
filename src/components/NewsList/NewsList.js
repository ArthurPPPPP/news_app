import React from "react";
import { NewsListItem } from "../NewsListItem";

export const NewsList = ({ news }) => {
  return (
    <main>
      <ul className="news-list">
        {news.map((n, i) => (
          <NewsListItem
            img={n.fields.thumbnail}
            headName={n.pillarName}
            text={n.fields.bodyText}
            title={n.fields.headline}
            author={n.fields.byline}
            date={n.fields.firstPublicationDate}
            index={i}
            key={n.id}
          />
        ))}
      </ul>
    </main>
  );
};
