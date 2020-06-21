import React, { Component, Fragment } from 'react';
// import SearchMovie from "./components/SearchMovie/searchMovie";
// import Card from './components/Card/card';
import HomePage from './components/HomePage/homePage'

class App extends Component {
  render() {
    return (
      <Fragment>
        <HomePage />
        {/* <SearchMovie />
        <Card /> */}
      </Fragment>
    );
  }
}

export default App;