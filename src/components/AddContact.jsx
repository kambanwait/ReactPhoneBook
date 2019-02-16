import React from 'react';

const AddContact = props => {
  return (
    <React.Fragment>
      <h3>Add a new contact</h3>
      <form onSubmit={props.addContact}>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Number:</label>
          <input type="number" />
        </div>

        <button type="submit">Add contact</button>
      </form>
      <hr />
    </React.Fragment>
  );
}

export default AddContact;