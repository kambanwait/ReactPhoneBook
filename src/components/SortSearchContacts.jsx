import React, { Component } from 'react';

class SortSearchContacts extends Component {

  filterUpdate() {
    const searchValue = this.searchValue.value;
    this.props.filterUpdate(searchValue);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <label>Search:</label>
          <input
            type="search"
            placeholder="Type to start searching..."
            ref={(value) => { this.searchValue = value }}
            onChange={this.filterUpdate.bind(this)}
          />
        </div>
        <div>
          <label>Sort:</label>
          <select>
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>
      </React.Fragment>
    )
  }
}

export default SortSearchContacts;