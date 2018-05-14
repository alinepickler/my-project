import React from "react";
import { Link } from "react-router-dom";
import { api } from "../../utils";
import "./styles.css";

export const NewsItem = ({ id }) => {
  const item = api.getItem(id);
  return (
    <div className="item">
      <h3 classname="title">
        <a className="link" href={item.url}>
          {item.title}
        </a>
      </h3>
      <Link to={`/item/${item.id}`}>{item.score} points</Link>
      by {item.by} at {item.time} |
      <Link to={`/item/${item.id}`}>
        {item.descendants === 0 ? "discuss" : item.descendants + " comments"}
      </Link>
    </div>
  );
};
