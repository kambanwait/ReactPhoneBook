import React, { Component } from 'react';

const initialState = {
  name: '',
  number: '',
  address: ''
}

class AddContact extends Component {
  state = { ...initialState }

  onChange = event => {
    this.setState(
      { ...this.state, [event.target.name]: event.target.value }
    )
  };

  render() {
    return (
      <React.Fragment>
        <h3>Add a new contact</h3>
        <form onSubmit={this.props.addContact}>
          <div>
            <label>Name:</label>
            <input name="name" type="text" onChange={this.onChange} />
          </div>
          <div>
            <label>Number:</label>
            <input name="number" type="number" onChange={this.onChange} />
          </div>
          <div>
            {/* "10 London Wall, London EC2M 6SA, UK" */}
            <label>Address:</label>
            <input name="address" type="text" onChange={this.onChange} />
          </div>

          <button type="submit">Add contact</button>
        </form>
        <hr />
      </React.Fragment >
    );
  }
}

export default AddContact;