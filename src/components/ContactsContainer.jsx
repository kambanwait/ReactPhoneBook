import React from 'react';

import SortSearchContacts from './SortSearchContacts';
import ContactsList from './ContactsList'

export default (props) => {

  // sort the list ascending/descending depending on state value
  const sortByName = (a, b) => {
    if (props.sortContactValue === 'ascending') {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    } else {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
    }
    return 0;
  }

  const contactList = props.contacts
    .filter(contact => { // contact = individual array item
      // check each contact.name value for filtered text and only show the "true" result
      return contact.name.toLowerCase().indexOf(props.filterText.toLowerCase()) >= 0;
    })
    .sort(sortByName)
    .map((contact, index) => {
      return (
        <li key={index}>
          <h4>#{index} {contact.name}</h4>
          <p>{contact.phone_number}</p>
          <address>{contact.address}</address>
          <button onClick={props.removeContact}>Remove contact X</button>
        </li>
      )
    })

  const contacts = props.loading ? 'loading...' : contactList;

  return (
    <React.Fragment>
      <SortSearchContacts
        filterUpdate={props.filterUpdate}
        sortContactValue={props.sortContactValue}
        sortContacts={props.sortContacts}
      />
      <ContactsList contactsSorted={contacts} />
    </React.Fragment>
  );
}