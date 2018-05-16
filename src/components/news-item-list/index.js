import React from "react";
import { NewsItem } from "../";

export const NewsItemList = props => {
  const ids = props.ids;

  return (
    <ol>
      {ids.map(id => (
        <li key={id}>
          <NewsItem id={id} />
        </li>
      ))}
    </ol>
  );
};
