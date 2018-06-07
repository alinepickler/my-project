import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu } from "../";
import "./styles.css";

import * as actions from "../../actions";

const mainMenu = [
  { text: "New", url: "https://news.ycombinator.com/newest" },
  { text: "Show", url: "https://news.ycombinator.com/show" },
  { text: "Submit", url: "https://news.ycombinator.com/submit" }
];

export const Header = props => (
  <div className="header">
    <span className="header_logo">
      <Link to="/">
        <img src="https://news.ycombinator.com/y18.gif" alt="React news logo" />
        React news
      </Link>
    </span>
    <div className="header_menu">
      <Menu links={mainMenu} />
    </div>
    <button
      onClick={e => {
        props.toggleTheme();
      }}
    >
      toggle theme
    </button>
  </div>
);

const mapDispatchToProps = {
  toggleTheme: actions.toggleTheme
};

export default connect(null, mapDispatchToProps)(Header);
