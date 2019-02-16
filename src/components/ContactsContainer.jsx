import React from 'react';

import Sort from './ContactsSort';
import ContactsList from './ContactsList'

const ContactsContainer = props => {

  // const FilteredName = contacts => {
  //   console.log(contacts)
  //   return true;
  // }

  let contactList = props.contacts
    .filter(contact => { // contact = individual array item
      // check each contact.name value for filtered text and only show the "true" result
      return contact.name.indexOf(props.filterText) >= 0;
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
      <Sort />
      <ContactsList contactsSorted={contacts} />
    </React.Fragment>
  );
}

export default ContactsContainer;