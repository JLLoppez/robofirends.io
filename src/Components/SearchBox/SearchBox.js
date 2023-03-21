import React from 'react';
import './SearchBox.css';
import {FaSearch} from 'react-icons/fa';


const SearchBox = ({ searchfield, searchChange}) => {
 
  return (
    <div class="search-container">
      <input 
        type="text" 
        placeholder="Search..."
        onChange={searchChange}/>
        <i class="fa fa-search">
          <FaSearch/>
        </i>
    </div>

  );
}
export default SearchBox;