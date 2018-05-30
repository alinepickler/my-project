import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import PropTypes from "prop-types";
import { distanceInWordsToNow } from "date-fns";
import { Link } from "react-router-dom";
import "./styles.css";

class NewsItem extends Component {
  componentDidMount() {
    this.props.fetchItem(this.props.id);
  }
  render() {
    const { item } = this.props;
    if (!item) {
      return <div>Loading...</div>;
    }
    const dateTime = new Date(item.time * 1000);
    const relativeTime = distanceInWordsToNow(dateTime);
    return (
      <div>
        <a href={item.url} className="newsItemTitle">
          <h2 className="newsItem-heading">{item.title}</h2>
        </a>
        <div>
          <Link to={`/item/${item.id}`} className="newsItem">
            <span className="newsItem">{item.score} points | </span>
          </Link>
          <span className="newsItem">by {item.by} | </span>
          <Link to={`/item/${item.id}`} className="newsItem">
            <span className="newsItem">
              <time dateTime={dateTime}>{relativeTime} ago | </time>
            </span>
            <span className="newsItem">
              {item.descendants === 0
                ? "discuss"
                : item.descendants + " comments"}
            </span>
          </Link>
        </div>
      </div>
    );
  }
}
NewsItem.propTypes = {
  id: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    item: (state.data.items[ownProps.id] || {}).item
  };
};

const mapDispatchToProps = {
  fetchItem: actions.fetchItem
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem);
