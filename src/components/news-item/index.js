import React, { Component } from "react";
import { Link } from "react-router-dom";
import { api } from "../../utils";
import "./styles.css";

export class NewsItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: undefined
    };
  }
  componentDidMount() {
    api
      .getItem(this.props.id)
      .then(item => {
        this.setState({ item });
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    const { item } = this.state;
    if (!item) {
      return <div>Loading...</div>;
    }
    return (
      <div className="item">
        <h3 className="title">
          <a className="link" href={item.url}>
            {item.title}
          </a>
        </h3>
        <Link to={`/item/${item.id}`}>{item.score} points </Link>
        by {item.by} at {item.time} |{" "}
        <Link to={`/item/${item.id}`}>
          {item.descendants === 0 ? "discuss" : item.descendants + " comments"}
        </Link>
      </div>
    );
  }
}
