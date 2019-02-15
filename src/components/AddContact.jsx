import React from 'react';

const AddContact = () => {
  return (
    <React.Fragment>
      <h3>Add a new contact</h3>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Number:</label>
          <input type="number" />
        </div>
      </form>
      <hr />
    </React.Fragment>
  );
}

export default AddContact;