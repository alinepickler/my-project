import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Page,
  Header,
  Footer,
  Content,
  PageNewsList,
  NewsItem
} from "./components";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Page>
          <div className="page_content">
            <Header />
            <Content>
              <Switch>
                <Route exact path="/" component={PageNewsList} />
                <Route
                  path="/item/:itemId"
                  render={({ match }) => <NewsItem id={match.params.itemId} />}
                />
              </Switch>
            </Content>
          </div>
          <Footer />
        </Page>
      </BrowserRouter>
    );
  }
}

export default App;
