import React from 'react';

import Sort from '../components/Sort';

const Contacts = props => {

  let contactList = props.contacts.map(function (contact, index) {
    return (
      <li key={index}>
        <h4>{contact.name}</h4>
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
      <ul>
        {contacts}
      </ul>
    </React.Fragment>
  );
}

export default Contacts;