import React, { Component, Fragment } from 'react';
import ShowList from "./components/ShowList/showList";
import Card from './components/Card/card'

class App extends Component {
  render() {
    return (
      <Fragment>
        <ShowList/>
        <Card />
      </Fragment>
    );
  }
}

export default App;