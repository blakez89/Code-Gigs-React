import React, { Component } from "react";
import "./app.css";
import SearchBar from "./SearchBar/SearchBar";
import MainPanel from "./MainPanel/MainPanel";
import GigList from "./GigList/GigList";
import { AddGigFunction } from "./AddGig/AddGigFunction";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router className="wrapstuff">
        <MainPanel />

        <Route exact path="/" render={() => <SearchBar />} />

        <Route exact path="/gigs" render={() => <GigList />} />

        <Route
          exact
          path="/addgig"
          render={() => (
            <AddGigFunction />
          )}
        />
      </Router>
    );
  }
}
