import React, { Component } from "react";
import { NewsItemList } from "../";
import { api } from "../../utils";

export class PageNewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ids: undefined
    };
  }
  componentDidMount() {
    api
      .getItemsIds()
      .then(ids => {
        this.setState({ ids });
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    const { ids } = this.state;
    if (!ids) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <NewsItemList ids={ids} />
      </div>
    );
  }
}
