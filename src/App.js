import React, { Component } from 'react';

import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactsContainer from './components/ContactsContainer';

import './App.css';

class App extends Component {

  // before app is mounted and rendered we need to go and fetch the contact list from the API
  // when contacts have been fetched we then assign them to the state and pass that as a prop to the contacts list to render out each contact
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      filterText: '',
      sortContactValue: 'ascending',
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

  // Now we want to be able to search the names
  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  // We want to sort them by name in de/ascending order
  sortContacts = (value) => {
    this.setState({
      sortContactValue: value
    })
  }

  // We want to be able to add a name to the contact list
  addContact = (event) => {
    event.preventDefault();
    console.log(event.target);
  }

  // we want to be able to remove a contact
  removeContact = contactToBeRemoved => {
    var filteredContacts = this.state.contacts.filter(function (contact) {
      return contact.name !== contactToBeRemoved
    })

    this.setState({
      contacts: filteredContacts
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header title="Kam's Phone Book" />
        <AddContact addContact={this.addContact} />
        <ContactsContainer
          contacts={this.state.contacts}
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
          sortContacts={this.sortContacts}
          sortContactValue={this.state.sortContactValue}
          removeContact={this.removeContact}
          loading={this.state.loading}
        />
      </React.Fragment>
    );
  }
}

export default App;
