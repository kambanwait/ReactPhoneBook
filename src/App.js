import React, { Component } from 'react';

import Header from './components/Header';
import AddContact from './components/AddContact';
import Sort from './components/Sort';
import Contacts from './components/Contacts';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title="Kam's Phone Book" />
        <AddContact />
        <Sort />
        <Contacts />
      </React.Fragment>
    );
  }
}

export default App;
