import React, { Component } from 'react';

class SortSearchContacts extends Component {

  filterUpdate() {
    const searchValue = this.searchValue.value;
    this.props.filterUpdate(searchValue);
  }

  sortUpdate(event) {
    const sortValue = event.target.value;
    this.props.sortContacts(sortValue)
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
          <select onChange={this.sortUpdate.bind(this)} defaultValue={this.props.sortContactValue} >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </React.Fragment>
    )
  }
}

export default SortSearchContacts;