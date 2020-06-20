import React, { Component, Fragment } from 'react';
import SearchMovie from "./components/SearchMovie/searchMovie";
import Card from './components/Card/card'

class App extends Component {
  render() {
    return (
      <Fragment>
        <SearchMovie />
        <Card />
      </Fragment>
    );
  }
}

export default App;