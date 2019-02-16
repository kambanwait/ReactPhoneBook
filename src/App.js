import React, { Component } from 'react';

import Header from './components/Header';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';

import './App.css';

class App extends Component {

  // before app is mounted and rendered we need to go and fetch the contact list from the API
  // when contacts have been fetched we then assign them to the state and pass that as a prop to the contacts list to render out each contact
  constructor(props) {
    super(props);

    this.state = {
      contacts: ["no contacts"],
      loading: true
    }
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/581335f71000004204abaf83')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            contacts: result.contacts,
            loading: false
          });
        },
        (error) => {
          this.setState({
            contacts: ['error loading contacts'],
            loading: false,
            error
          });
        }
      )
  }

  // Now that we have contacts we want to sort them by name in de/ascending order
  // we want to be able to remove a contact

  addContact = (event) => {
    event.preventDefault();
    console.log(event.target);
  }

  removeContact = event => {
    event.preventDefault();
    console.log('Remove contact clicked');
  }


  // Now we want to be able to search the names

  // We want to be able to add a name to the contact list

  render() {
    return (
      <React.Fragment>
        <Header title="Kam's Phone Book" />
        <AddContact addContact={this.addContact} />
        <Contacts removeContact={this.removeContact} contacts={this.state.contacts} loading={this.state.loading} />
      </React.Fragment>
    );
  }
}

export default App;
