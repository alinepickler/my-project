import React from "react";
import { Menu } from "../";

const mainMenu = [
  { text: "New", url: "https://news.ycombinator.com/newest" },
  { text: "Show", url: "https://news.ycombinator.com/show" },
  { text: "Submit", url: "https://news.ycombinator.com/submit" }
];

const first = mainMenu[0];

export const Header = () => (
  <div>
    <span>
      <img src="https://news.ycombinator.com/y18.gif" alt="React news logo" />
      React news
    </span>
    <Menu links={mainMenu} />
  </div>
);
