import React from 'react';

import SortSearchContacts from './SortSearchContacts';
import ContactsList from './ContactsList'

export default (props) => {

  const contactList = props.contacts
    .filter(contact => { // contact = individual array item
      // check each contact.name value for filtered text and only show the "true" result
      return contact.name.toLowerCase().indexOf(props.filterText.toLowerCase()) >= 0;
    })
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
      <SortSearchContacts filterUpdate={props.filterUpdate} />
      <ContactsList contactsSorted={contacts} />
    </React.Fragment>
  );
}