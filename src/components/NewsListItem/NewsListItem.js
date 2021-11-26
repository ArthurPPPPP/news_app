import React from "react";
import { useEffect } from "react/cjs/react.development";

export const NewsListItem = (props, index) => {
  return (
    <li>
      <div>
        <img src={props.img} />
      </div>
      <div>
        <h2></h2>
        <p>{props.title}</p>
        <span>{props.date}</span>
        <div>
          <button>read more</button>
        </div>
      </div>
    </li>
  );
};
