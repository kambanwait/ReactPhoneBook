import React from 'react';

const SortContacts = () => {
  return (
    <React.Fragment>
      <div>
        <label>Search:</label>
        <input type="search" placeholder="search" />
      </div>
      <div>
        <label>Sort:</label>
        <select>
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </div>
    </React.Fragment>
  );
}

export default SortContacts;