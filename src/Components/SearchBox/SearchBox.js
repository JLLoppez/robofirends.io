import React from 'react';
import './SearchBox.css';
import {FaSearch} from 'react-icons/fa';


const SearchBox = ({ searchfield, searchChange}) => {
 
  return (
    <div className='abi'>
      <div className='box'>
        <form className='search'>
          <input 
            className='input'
            type='text'
            placeholder=''
            onChange={searchChange}
          />
          <FaSearch className='i'/>
        </form>
      </div>
    </div>
  );
}
export default SearchBox;