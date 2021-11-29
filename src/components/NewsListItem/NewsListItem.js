import React from "react";
import "./styles.scss";

export const NewsListItem = (props) => {
  return (
    <li className="list-item">
      <div className="list-item-img">
        <img src={props.item.fields.thumbnail} />
      </div>
      <div className="list-item-txt">
        <p>{props.item.fields.headline}</p>

        <div className="list-item-btn">
          <span>{props.item.fields.firstPublicationDate}</span>
          <button>Read more</button>
        </div>
      </div>
    </li>
  );
};
